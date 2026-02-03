import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 animate-fade-up" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 border-b border-white/10 pb-12 sm:pb-16 mb-8 sm:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4 sm:mb-6" aria-label="VGA Holdings Home">
              <Image
                src="/logos/vgalogo.png"
                alt="VGA Holdings Logo"
                width={200}
                height={200}
                className="h-12 sm:h-14 md:h-16 w-auto"
                sizes="64px"
              />
            </Link>
          </div>

          <div>
            <h5 className="text-xs sm:text-sm font-medium text-white mb-4 sm:mb-6 uppercase tracking-wider">Company</h5>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/60">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#leaders" className="hover:text-[#d4af37] transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-[#d4af37] transition-colors">
                  What We Do
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs sm:text-sm font-medium text-white mb-4 sm:mb-6 uppercase tracking-wider">
              Investments
            </h5>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/60">
              <li>
                <a href="#portfolio" className="hover:text-[#d4af37] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#d4af37] transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs sm:text-sm font-medium text-white mb-4 sm:mb-6 uppercase tracking-wider">Contact</h5>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/60">
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#d4af37] transition-colors">
                  Our Clients
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 text-center md:text-left">
          <p>© 2026 VGA Holdings. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed by VGA Holdings.</p>
        </div>
      </div>
    </footer>
  )
}
