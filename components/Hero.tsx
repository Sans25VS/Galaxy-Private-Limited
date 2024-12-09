import Image from 'next/image';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug">
              Better Packaging, <br />
              <span className="text-orange-400">Better Life.</span>
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed">
              Providing innovative packaging solutions since 2018
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/Front_Page.png"
                alt="Client Tree"
                width={400} // Increased size for better alignment
                height={300} // Increased size for better alignment
                className="rounded-lg object-contain"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
