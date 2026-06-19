
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

// --- Custom Social SVGs ---
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);
// ----------------------------

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Newsletter & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-zinc-900 pb-16">
          
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold tracking-wider uppercase text-lg mb-4 group w-fit">
              <Zap className="w-6 h-6 text-blue-500 fill-blue-500/20 group-hover:scale-110 transition-transform" />
              <span className="text-white">EVEEZ</span>
            </Link>
            <p className="text-zinc-400 text-sm font-light max-w-sm leading-relaxed">
              Pioneering the future of zero-emission mobility. We curate the pinnacle of electric performance, architecture, and design.
            </p>
          </div>

          <div className="flex flex-col lg:items-end">
            <h3 className="text-white font-semibold mb-2">Stay on the grid.</h3>
            <p className="text-zinc-500 text-sm mb-4">Get the latest updates on solid-state battery tech and new vehicle drops.</p>
            <div className="flex w-full max-w-md relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-zinc-950 rounded-lg hover:bg-blue-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">The Fleet</h4>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Porsche Taycan</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Lucid Air</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Kia EV9 GT</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Tesla Model 3</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Technology</h4>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">800V Architecture</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Solid-State Batteries</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Autonomous Driving</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Charging Network</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Ownership</h4>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Financial Services</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Trade-In Estimator</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Certified Pre-Owned</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Home Charging Setup</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Company</h4>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">About Us</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Careers</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Investors</Link>
            <Link href="#" className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">Press & Media</Link>
          </div>
        </div>

        {/* Bottom Section: Legal & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 gap-6">
          
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>© 2026 VoltDrive Motors.</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>

          {/* Render Custom Social Icons Here */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <XIcon className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <YouTubeIcon className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
              <LinkedInIcon className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}