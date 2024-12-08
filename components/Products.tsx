import Image from 'next/image'

const products = [
  { name: "Tea", companies: ["Unilever", "Tata Tea", "Wagh Bakri"] },
  { name: "Rice", companies: ["Daawat", "India Gate", "Kohinoor"] },
  { name: "Atta", companies: ["Aashirvaad", "Pillsbury", "Nature Fresh"] },
  { name: "Chips", companies: ["Lay's", "Pringles", "Haldiram's"] },
  { name: "Papad", companies: ["Lijjat", "Shree Ram", "Bikaji"] },
  { name: "Snacks", companies: ["Kurkure", "Bingo", "Balaji"] },
  { name: "Noodles", companies: ["Maggi", "Top Ramen", "Yippee"] },
  { name: "Shampoo", companies: ["Dove", "Pantene", "Sunsilk"] },
  { name: "Namkeen", companies: ["Haldiram's", "Bikaji", "Bikanervala"] },
  { name: "Detergent", companies: ["Surf Excel", "Ariel", "Tide"] },
  { name: "Masala & Spices", companies: ["MDH", "Everest", "Catch"] },
  { name: "Cookies & Biscuits", companies: ["Parle", "Britannia", "Sunfeast"] },
]

export function Products() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          Our <span className="text-orange-500">Products</span> and <span className="text-orange-500">Clients</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">{product.name}</h3>
              <ul className="space-y-2">
                {product.companies.map((company, companyIndex) => (
                  <li key={companyIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-gray-700">{company}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-blue-900 mb-4">We also provide packaging solutions for:</p>
          <p className="text-gray-700">Seeds & Agriculture Products • Other General Items</p>
        </div>
      </div>
    </div>
  )
}

