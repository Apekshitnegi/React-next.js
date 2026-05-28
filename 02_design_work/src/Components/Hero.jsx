export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          {/* TEXT */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              LETS HAVE CHAI OR COFFEE FOR START SOMETHING
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Chai for comfort, coffee for fire,
              <br />
              One soothes the soul, one fuels desire.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold text-white hover:text-gray-100">
                Learn more →
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative mt-16 h-80 w-full lg:mt-8 lg:h-auto lg:flex-1">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="Chai Coffee"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}