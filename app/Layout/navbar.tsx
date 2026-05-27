'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Utilities/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="lg:col-span-1 pt-7">
          <Link href="/" className="group flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <span className="text-white font-bold text-2xl tracking-tighter">A</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 ">
             Nexora
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          <Link href="/" className="text-white/90 hover:text-white relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link href="/component/Service" className="text-white/90 hover:text-white relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link href="/component/Portfolio" className="text-white/90 hover:text-white relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>

          <Link href="/component/Contact" className="text-white/90 hover:text-white relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>


        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8"
        >
          <div className="flex flex-col gap-6 text-lg font-medium text-white/90">

            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/component/Service" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/component/Portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/component/Contact" onClick={() => setIsOpen(false)}>Contact</Link>



          </div>
        </motion.div>
      )}
    </nav>
  );
}











// 'use client';
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Button from "../Utilities/Button";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
//         {/* Logo */}
//         <div className="lg:col-span-1 pt-7">
//           <Link href="/" className="group flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-500 flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
//               <span className="text-white font-bold text-2xl tracking-tighter">A</span>
//             </div>
//             <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//               Agency
//             </h1>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-10 text-sm font-medium">

//           <Link href="/" className="text-white/90 hover:text-white relative group">
//             Home
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
//           </Link>

//           {/*  KEPT YOUR ORIGINAL /component PATHS */}
//           <Link href="/component/Service" className="text-white/90 hover:text-white relative group">
//             Services
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
//           </Link>

//           <Link href="/component/Portfolio" className="text-white/90 hover:text-white relative group">
//             Portfolio
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
//           </Link>

//           <Link href="/component/Contact" className="text-white/90 hover:text-white relative group">
//             Contact
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
//           </Link>

//           {/* FIXED BUTTON (NO WRAPPING LINK) */}

//           <Button
//             text="Login"
//             href="/component/Login"
//             className="ml-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-purple-700 hover:to-cyan-600"
//           />
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8"
//         >
//           <div className="flex flex-col gap-6 text-lg font-medium text-white/90">

//             <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link href="/component/Service" onClick={() => setIsOpen(false)}>Services</Link>
//             <Link href="/component/Portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
//             <Link href="/component/Contact" onClick={() => setIsOpen(false)}>Contact</Link>

//             {/*  FIXED: removed <link> (this was causing crash) */}
//             <Link href="/component/Login">
//               <Button
//                 text="Login"
//                 href="/component/Login"
//                 className="ml-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-purple-700 hover:to-cyan-600"
//               />
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// }