import Image from 'next/image'

const clients = [
  { name: 'Unilever', materials: ['Tea', 'Shampoo', 'Detergent'], logo: '/placeholder.svg?height=100&width=100&text=Unilever' },
  { name: 'Britannia', materials: ['Cookies', 'Biscuits'], logo: '/placeholder.svg?height=100&width=100&text=Britannia' },
  { name: 'Parle', materials: ['Biscuits', 'Snacks'], logo: '/placeholder.svg?height=100&width=100&text=Parle' },
  { name: 'Haldiram\'s', materials: ['Namkeen', 'Snacks'], logo: '/placeholder.svg?height=100&width=100&text=Haldiram\'s' },
  { name: 'Tata Tea', materials: ['Tea'], logo: '/placeholder.svg?height=100&width=100&text=Tata+Tea' },
  { name: 'ITC', materials: ['Atta', 'Biscuits', 'Snacks'], logo: '/placeholder.svg?height=100&width=100&text=ITC' },
]

export function ClientShowcase() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          Our <span className="text-orange-500">Valued Clients</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Image 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  width={100} 
                  height={100} 
                  className="rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold text-blue-900">{client.name}</h3>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Materials we package:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {client.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

