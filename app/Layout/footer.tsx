    'use client';

    import Link from 'next/link';
    import { useState, useEffect } from 'react';
    import { ArrowUp, Mail, Phone } from 'lucide-react';

    export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const currentYear = new Date().getFullYear();

    const pages = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/component/Service" },
        { name: "Portfolio", path: "/component/Portfolio" },
        { name: "Contact", path: "/component/Contact" },
    ];

    const services = [
        "Web Design",
        "Web Development",
        "UI/UX Design",
        "Branding",
    ];

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
        <footer className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-white border-t border-white/10 mt-20">
            
            {/* Subtle Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-cyan-950/20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">

            {/* Let's Talk Section */}
            <div className="text-center mb-20">
                <h1 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 
                            bg-clip-text text-transparent mb-6 tracking-tight
                            hover:scale-[1.03] transition-all duration-500"
                >
                Let’s Talk
                </h1>

                <p className="text-white/70 text-xl max-w-md mx-auto leading-relaxed">
                Have a project in mind? Let’s build something amazing together.
                </p>

                {/* Clickable Contact Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* Email Button - Opens Gmail / Mail App */}
                <a
                    href="mailto:wasim07052003@gmail.com"
                    className="group flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5  hover:from-purple-500/10 hover:to-cyan-500/10 border border-white/10 hover:border-purple-400/50 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                >
                    <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 text-purple-400" />
                    <span className="font-medium text-lg">Connect via Email</span>
                </a>

                {/* Phone Button - Directly Dials Number */}
                <a
                    href="tel:+918220447669"
                    className="group flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-purple-500/10 hover:to-cyan-500/10 border border-white/10   hover:border-cyan-400/50 px-8 py-4 rounded-2xl transition-all duration-300  hover:scale-105 active:scale-95 shadow-lg"
                >
                    <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 text-cyan-400" />
                    <span className="font-medium text-lg">+91 82204 47669</span>
                </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                {/* Brand Section */}
                <div className="lg:col-span-5">
                <h2 className="text-6xl md:text-7xl lg:text-8xl p-4 font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 tracking-tight hover:scale-[1.05] transition-all duration-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"> Nexora </h2>
                <p className="text-white/60 text-[17px] leading-relaxed max-w-lg">
                    We build modern digital experiences for growing businesses. 
                    Turning bold ideas into powerful, user-centered digital solutions.
                </p>
                </div>

                {/* Pages */}
                <div className="lg:col-span-3">
                <h3 className="font-semibold text-xl mb-6 text-white tracking-wide">Pages</h3>
                <ul className="space-y-4 text-white/70 text-lg">
                    {pages.map((item) => (
                    <li key={item.path}>
                        <Link 
                        href={item.path}
                        className="hover:text-white transition-all duration-300 hover:translate-x-3 inline-block group"
                        >
                        {item.name}
                        <span className="block h-px w-0 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Services */}
                <div className="lg:col-span-4">
                <h3 className="font-semibold text-xl mb-6 text-white tracking-wide">Services</h3>
                <ul className="space-y-4 text-white/70 text-lg">
                    {services.map((item, index) => (
                    <li 
                        key={index}
                        className="hover:text-white transition-all duration-300 hover:translate-x-3 cursor-pointer group"
                    >
                        {item}
                        <span className="block h-px w-0 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                    </li>
                    ))}
                </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-20 pt-10 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
                <p>© {currentYear} Agency. All rights reserved.</p>
                
                <div className="flex gap-8 mt-6 sm:mt-0">
                <Link href="#" className="hover:text-white transition-all duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-all duration-300">Terms of Service</Link>
                </div>
            </div>

            </div>
        </footer>

        {/* Back to Top Button */}
        <button
            onClick={scrollToTop}
            className={`fixed bottom-10 cursor-pointer right-10 z-50 w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 
                    rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/60 
                    transition-all duration-500 hover:scale-110 active:scale-95 
                    ${showBackToTop 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12 pointer-events-none'}`}
            aria-label="Back to top "
        >
            <ArrowUp className="w-7 h-7 text-white" />
        </button>
        </>
    );
    }







//  {/* Footer */}
//         <footer className="border-t border-zinc-800/60 px-8 py-8">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <span className="text-cyan-400 font-bold text-sm tracking-wider">W. CREATORS</span>
//             <div className="flex items-center gap-8">
//               {['INSTAGRAM', 'TWITTER', 'BEHANCE', 'LINKEDIN'].map((s) => (
//                 <a key={s} href="#"
//                   className="text-[11px] tracking-[2px] text-zinc-600 hover:text-zinc-300 transition-colors">
//                   {s}
//                 </a>
//               ))}
//             </div>
//             <span className="text-[11px] text-zinc-700">© 2026 W. CREATORS. ALL RIGHTS RESERVED.</span>
//           </div>
//         </footer>