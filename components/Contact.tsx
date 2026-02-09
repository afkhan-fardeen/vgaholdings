import Section from '@/components/Section'

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-black text-white"
      containerClassName="text-center flex flex-col justify-between min-h-full"
    >
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-10 sm:mb-14 animate-fade-up anim-delay-100 parallax-text">
          Say hello
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 sm:gap-10 md:gap-14 text-sm sm:text-base font-light text-white/80 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full md:w-auto">
            <iconify-icon icon="solar:phone-linear" width="28" height="28" className="text-[#d4af37] sm:w-9 sm:h-9 md:w-10 md:h-10" stroke-width="1.5" />
            <div className="text-center md:text-left">
              <h3 className="text-xs sm:text-sm font-medium text-white/90 mb-1">Switchboard</h3>
              <a href="tel:+97317005357" className="text-sm sm:text-base hover:text-[#d4af37] transition-colors">
                (+973) 17005357
              </a>
            </div>
          </div>
          <div className="hidden md:block w-px h-20 bg-white/20" />
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full md:w-auto max-w-sm">
            <iconify-icon icon="solar:map-point-linear" width="28" height="28" className="text-[#d4af37] sm:w-9 sm:h-9 md:w-10 md:h-10" stroke-width="1.5" />
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Mandarin Tower, Office 101, 10th Floor, Road 3615, Block 436, Building 681, Al Seef,
                Kingdom Of Bahrain.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-20 bg-white/20" />
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full md:w-auto">
            <iconify-icon icon="solar:letter-linear" width="28" height="28" className="text-[#d4af37] sm:w-9 sm:h-9 md:w-10 md:h-10" stroke-width="1.5" />
            <div className="text-center md:text-left">
              <h3 className="text-xs sm:text-sm font-medium text-white/90 mb-1">Email</h3>
              <a
                href="mailto:info@vgaholdings.com"
                className="text-sm sm:text-base hover:text-[#d4af37] transition-colors break-all"
              >
                info@vgaholdings.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 sm:pt-16 text-xs sm:text-sm text-white/50">
        © 2026 VGA Holdings. All Rights Reserved.
      </div>
    </Section>
  )
}
