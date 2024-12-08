import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Machinery } from '@/components/Machinery'
import { CompanyProfile } from '@/components/CompanyProfile'
import { Contact } from '@/components/Contact'
import { AlertScreen } from '@/components/AlertScreen'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AlertScreen />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Machinery />
        <CompanyProfile />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-blue-100">&copy; 2023 Galaxy Packaging (P) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

