import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function AffiliateDisclosure() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Alert className="max-w-4xl mx-auto bg-muted/50">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-sm leading-relaxed">
          As an eBay Partner, we may earn a commission when you purchase through our links at no additional cost to you.
        </AlertDescription>
      </Alert>
    </div>
  )
}
