"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneOnClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Phone copied to clipboard!")
  }

  return (
    <div key={phone} className="flex justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        onClick={() => handleCopyPhoneOnClick(phone)}
        variant="outline"
        size="sm"
      >
        Copy
      </Button>
    </div>
  )
}

export default PhoneItem
