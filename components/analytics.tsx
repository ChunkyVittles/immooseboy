'use client'

/**
 * Site Factory Analytics Component
 *
 * Tracks: page views, scroll depth, affiliate clicks, live presence
 * Reports to: Site Factory backend via configurable endpoint
 *
 * Configure via environment variables:
 * - NEXT_PUBLIC_ANALYTICS_URL: Backend API URL (e.g., https://api.bullbotics.com)
 * - NEXT_PUBLIC_SITE_ID: Site identifier for this deployment
 * - NEXT_PUBLIC_CF_ACCESS_CLIENT_ID: Cloudflare Access service token client ID
 * - NEXT_PUBLIC_CF_ACCESS_CLIENT_SECRET: Cloudflare Access service token secret
 */

import { useEffect } from 'react'

interface AnalyticsProps {
  siteId?: string
  analyticsUrl?: string
}

export function Analytics({
  siteId = process.env.NEXT_PUBLIC_SITE_ID || 'unknown',
  analyticsUrl = process.env.NEXT_PUBLIC_ANALYTICS_URL || ''
}: AnalyticsProps) {

  useEffect(() => {
    if (!analyticsUrl) {
      console.warn('Analytics: No NEXT_PUBLIC_ANALYTICS_URL configured')
      return
    }

    const collectUrl = `${analyticsUrl}/api/analytics/collect`
    const wsUrl = `${analyticsUrl.replace('http', 'ws')}/api/analytics/live/${siteId}`

    let queue: Array<{type: string, data: Record<string, unknown>, timestamp: number}> = []
    const startTime = Date.now()
    const scrollDepths: Record<number, boolean> = { 25: false, 50: false, 75: false, 100: false }
    const sessionId = Math.random().toString(36).slice(2)
    let ws: WebSocket | null = null

    const ts = () => Date.now()
    const track = (type: string, data: Record<string, unknown> = {}) => {
      queue.push({ type, data, timestamp: ts() })
    }

    // Cloudflare Access service token for authenticated requests
    const cfClientId = process.env.NEXT_PUBLIC_CF_ACCESS_CLIENT_ID || ''
    const cfClientSecret = process.env.NEXT_PUBLIC_CF_ACCESS_CLIENT_SECRET || ''

    const send = () => {
      if (!queue.length) return
      const body = JSON.stringify({ site_id: siteId, events: queue, session_id: sessionId })
      queue = []

      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (cfClientId && cfClientSecret) {
        headers['CF-Access-Client-Id'] = cfClientId
        headers['CF-Access-Client-Secret'] = cfClientSecret
      }

      fetch(collectUrl, {
        method: 'POST',
        body,
        headers,
        keepalive: true
      }).catch(() => {})
    }

    // Page load
    const params = new URLSearchParams(window.location.search)
    track('page_load', {
      referrer: document.referrer,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      device: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
      screen: `${window.innerWidth}x${window.innerHeight}`,
      path: window.location.pathname
    })

    // Scroll depth
    const handleScroll = () => {
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight
      if (h <= 0) return
      const p = Math.min(100, Math.round((window.scrollY / h) * 100))
      ;[25, 50, 75, 100].forEach(t => {
        if (p >= t && !scrollDepths[t]) {
          scrollDepths[t] = true
          track('scroll_depth', { threshold: t, time_to_reach: ts() - startTime })
        }
      })
    }

    // Click tracking
    const handleClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement | null
      if (!a) return
      const href = a.href
      const rel = a.getAttribute('rel') || ''
      if (rel.includes('sponsored')) {
        track('affiliate_click', {
          url: href,
          text: (a.textContent || '').slice(0, 50),
          product: a.getAttribute('aria-label') || ''
        })
        // Send immediately for affiliate clicks
        setTimeout(send, 100)
      } else if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        track('outbound_click', { url: href, text: (a.textContent || '').slice(0, 50) })
      }
    }

    // WebSocket for live presence
    const connectWs = () => {
      try {
        ws = new WebSocket(wsUrl)
        ws.onclose = () => {
          // Reconnect after 10 seconds
          setTimeout(connectWs, 10000)
        }
        ws.onerror = () => {
          ws?.close()
        }
      } catch {
        // Silently fail if WebSocket connection fails
      }
    }

    // Heartbeat
    const heartbeatInterval = setInterval(() => {
      track('time_on_page', { elapsed: ts() - startTime })
    }, 30000)

    // Send events every 5 seconds
    const sendInterval = setInterval(send, 5000)

    // Ping WebSocket every 30 seconds
    const pingInterval = setInterval(() => {
      if (ws && ws.readyState === WebSocket.OPEN) ws.send('ping')
    }, 30000)

    // Setup listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick)
    window.addEventListener('beforeunload', send)
    connectWs()
    setTimeout(send, 1000)

    return () => {
      clearInterval(heartbeatInterval)
      clearInterval(sendInterval)
      clearInterval(pingInterval)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
      window.removeEventListener('beforeunload', send)
      if (ws) ws.close()
    }
  }, [siteId, analyticsUrl])

  return null
}
