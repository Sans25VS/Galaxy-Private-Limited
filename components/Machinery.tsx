import Image from 'next/image'

const machinery = [
  { 
    name: "8 colour Rotogravure Printing Machine",
    count: 2,
    description: "High-precision printing for vibrant packaging designs",
    image: "/rotogravue.png?height=100&width=100&text=Rotogravure"
  },
  { 
    name: "250 Extrusion Lamination",
    count: 1,
    description: "Advanced lamination for multi-layer packaging",
    image: "/contact.png?height=100&width=100&text=Extrusion"
  },
  { 
    name: "Solvent less Lamination line",
    count: 2,
    description: "Eco-friendly lamination process for food-safe packaging",
    image: "/contact.png?height=100&width=100&text=Solventless"
  },
  { 
    name: "Solvent Base Lamination line",
    count: 1,
    description: "Versatile lamination for various packaging needs",
    image: "/contact.png?height=100&width=100&text=Solvent+Base"
  },
  { 
    name: "Slitting Machine",
    count: 3,
    description: "Precise cutting and sizing of packaging materials",
    image: "/contact.png?height=100&width=100&text=Slitting"
  },
  { 
    name: "Pouching Machine",
    count: 2,
    description: "Automated pouch formation for efficient packaging",
    image: "/contact.png?height=100&width=100&text=Pouching"
  },
  { 
    name: "Inspection Machine",
    count: 1,
    description: "Quality control to ensure perfect packaging every time",
    image: "/contact.png?height=100&width=100&text=Inspection"
  },
  { 
    name: "Blown Film machine",
    count: 1,
    description: "Production of high-quality plastic films for packaging",
    image: "/contact.png?height=100&width=100&text=Blown+Film"
  }
]

export function Machinery() {
  return (
    <div className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our <span className="text-orange-400">Machinery</span>
        </h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Galaxy Packaging is equipped with state-of-the-art machinery to deliver high-quality packaging solutions. Our advanced equipment ensures precision, efficiency, and innovation in every product we create.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinery.map((machine, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src={machine.image} 
                  alt={machine.name} 
                  width={60} 
                  height={60} 
                  className="mr-4"
                />
                <h3 className="text-xl font-semibold">{machine.name}</h3>
              </div>
              <p className="text-blue-200 mb-2">Quantity: {machine.count}</p>
              <p className="text-blue-100">{machine.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Technology Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Bobst', 'Windmoeller', 'Nordmeccanica', 'Rotomec'].map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <Image 
                  src={`/contact.png?height=60&width=120&text=${partner}`} 
                  alt={partner} 
                  width={120} 
                  height={60} 
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

