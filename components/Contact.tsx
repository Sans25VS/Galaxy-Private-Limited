'use client'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          Contact <span className="text-orange-500">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-orange-500" />
                Bahuari, Parwanipur Gaupalika-5, Bara, (Nepal)
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Phone className="text-orange-500" />
                +977 (51) 411155-8
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Phone className="text-orange-500" />
                Cell: 9855021531
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Mail className="text-orange-500" />
                info@galaxypack.com
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/9779855021531', '_blank')}
              >
                Contact via WhatsApp
              </Button>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.location.href = 'mailto:info@galaxypack.com'}
              >
                Send an Email
              </Button>
            </div>
          </div>
          <div>
            <Image 
              src="/contact.png?height=400&width=600" 
              alt="Factory Floor" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
            <p className="mt-4 text-center text-xl font-semibold text-blue-900">
              Better Packaging, <span className="text-orange-500">Better Life.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

