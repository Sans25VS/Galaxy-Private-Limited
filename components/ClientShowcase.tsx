import Image from 'next/image';

const clients = [
  { name: 'Unilever', materials: ['Tea', 'Shampoo', 'Detergent'], logo: '/unilever-logo.png' },
  { name: 'Britannia', materials: ['Cookies', 'Biscuits'], logo: '/britannia.png' },
  { name: 'Parle', materials: ['Biscuits', 'Snacks'], logo: '/parle.png' },
  { name: 'Haldiram\'s', materials: ['Namkeen', 'Snacks'], logo: '/haldiram-logo.jpeg' },
  { name: 'Tata Tea', materials: ['Tea'], logo: '/tata-tea.jpeg' },
  { name: 'ITC', materials: ['Atta', 'Biscuits', 'Snacks'], logo: '/itc.jpeg' },
];

export function ClientShowcase() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-blue-900">
          Our <span className="text-orange-500">Valued Clients</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              {/* Larger Image fully visible and centered */}
              <div className="flex justify-center items-center mb-6">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120} // Increased logo size
                  height={120} // Increased logo size
                  className="object-contain rounded-full" // Ensures full image visibility
                />
              </div>
              {/* Client details */}
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">{client.name}</h3> {/* Larger font size */}
                <p className="text-lg text-gray-600 mb-3 text-center">Materials we package:</p> {/* Larger description */}
                <ul className="list-disc list-inside text-lg text-gray-700">
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
  );
}

export default ClientShowcase;
