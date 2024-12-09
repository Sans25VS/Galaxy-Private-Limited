'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-blue-900 py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 p-1 shadow-lg">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Image 
                  src="/IMG-20240827-WA0030.jpg" 
                  alt="Galaxy Packaging Logo" 
                  width={200} 
                  height={200} 
                  className="object-contain rounded-full"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-xl md:text-2xl text-blue-700 font-bold">
                AN ISO 9001:2015, ISO 22000:2018
              </p>
              <p className="text-xl md:text-2xl text-blue-700 font-bold">
                & SEDEX SMETA CERTIFIED COMPANY
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
              <Button 
                key={item} 
                variant="ghost" 
                className="text-blue-900 hover:text-blue-700 hover:bg-blue-100 px-5 py-3 rounded-lg text-xl"
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
              <Button 
                key={item} 
                variant="ghost" 
                className="w-full text-blue-900 hover:text-blue-700 hover:bg-blue-100 px-5 py-3 rounded-lg text-xl"
              >
                {item}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
