"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/mooseboy-modified.webp"
            alt="I'm Moose Boy - silicon graffiti found in Nokia 5190 chips"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold font-mono">IM MOOSE BOY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#story" className="text-sm font-medium hover:text-accent transition-colors">
            The Story
          </Link>
          <Link href="#hunt-2022" className="text-sm font-medium hover:text-accent transition-colors">
            Discovery
          </Link>
          <Link href="#shop" className="text-sm font-medium hover:text-accent transition-colors">
            Nokia 5190
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-accent transition-colors">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#story"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={handleLinkClick}
            >
              The Story
            </Link>
            <Link
              href="#hunt-2022"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={handleLinkClick}
            >
              Discovery
            </Link>
            <Link
              href="#shop"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={handleLinkClick}
            >
              Nokia 5190
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium hover:text-accent transition-colors py-2"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
