export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[100svh] snap-start [scroll-snap-stop:always] flex items-center py-16 sm:py-24 md:py-32 bg-white animate-fade-up"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1F2A36] mb-8 sm:mb-12 animate-fade-up anim-delay-100">
          Say hello
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-sm sm:text-base md:text-lg font-light text-[#4A4F55]">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full md:w-auto">
            <iconify-icon icon="solar:phone-linear" width="24" height="24" className="text-[#d4af37] sm:w-7 sm:h-7 md:w-8 md:h-8" stroke-width="1.5" />
            <div className="text-center md:text-left">
              <h3 className="text-xs sm:text-sm font-medium text-[#1F2A36] mb-1">Switchboard</h3>
              <a href="tel:+97317005357" className="text-xs sm:text-sm md:text-base hover:text-[#d4af37] transition-colors">
                (+973) 17005357
              </a>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#D9D9D9]" />
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full md:w-auto max-w-sm">
            <iconify-icon icon="solar:map-point-linear" width="24" height="24" className="text-[#d4af37] sm:w-7 sm:h-7 md:w-8 md:h-8" stroke-width="1.5" />
            <div className="text-center">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                Mandarin Tower, Office 101, 10th Floor, Road 3615, Block 436, Building 681, Al Seef,
                Kingdom Of Bahrain.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#D9D9D9]" />
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full md:w-auto">
            <iconify-icon icon="solar:letter-linear" width="24" height="24" className="text-[#d4af37] sm:w-7 sm:h-7 md:w-8 md:h-8" stroke-width="1.5" />
            <div className="text-center md:text-left">
              <h3 className="text-xs sm:text-sm font-medium text-[#1F2A36] mb-1">Email</h3>
              <a
                href="mailto:info@vgaholdings.com"
                className="text-xs sm:text-sm md:text-base hover:text-[#d4af37] transition-colors break-all"
              >
                info@vgaholdings.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
