'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AlertScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Special Recognition</h2>
          <Button 
            variant="ghost" 
            onClick={() => setIsVisible(false)}
            className="text-blue-900 hover:text-blue-700"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Galaxy Packaging (P) Ltd. has been recognized as the
          <span className="font-bold text-orange-500"> "Best Contributor in the Packaging Field" </span>
          by Times of India.
        </p>
        <Button 
          onClick={() => setIsVisible(false)} 
          className="w-full bg-blue-900 hover:bg-blue-800 text-white"
        >
          Close
        </Button>
      </div>
    </div>
  )
}

