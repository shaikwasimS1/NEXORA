'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const currentYear = new Date().getFullYear();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'Branding',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-white border-t border-white/10 mt-20">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-cyan-950/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">

          {/* Hero CTA */}
          <div className="text-center mb-20">

            <h1
              className="
                text-5xl md:text-6xl font-bold
                bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
                bg-clip-text text-transparent
                mb-6 tracking-tight
                hover:scale-[1.03]
                transition-all duration-500
              "
            >
              Let’s Build Something Amazing
            </h1>

            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              We craft premium websites and digital experiences that help
              brands grow, stand out, and succeed online.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/component/Contact"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4 rounded-2xl
                  bg-gradient-to-r from-purple-500 to-cyan-500
                  text-white font-semibold text-lg
                  hover:scale-105 active:scale-95
                  transition-all duration-300
                  shadow-2xl shadow-purple-500/30
                "
              >
                Start a Project
              </Link>
            </div>

            {/* Contact Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

              {/* Email */}
              <a
                href="mailto:wasim07052003@gmail.com"
                className="
                  group flex items-center gap-4
                  bg-gradient-to-r from-white/10 to-white/5
                  hover:from-purple-500/10 hover:to-cyan-500/10
                  border border-white/10 hover:border-purple-400/50
                  px-8 py-4 rounded-2xl
                  transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  active:scale-95
                  shadow-lg hover:shadow-purple-500/20
                "
              >
                <Mail className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />

                <div className="text-left">
                  <p className="text-sm text-white/50">Email Us</p>
                  <p className="font-medium">
                    wasim07052003@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918220447669"
                className="
                  group flex items-center gap-4
                  bg-gradient-to-r from-white/10 to-white/5
                  hover:from-purple-500/10 hover:to-cyan-500/10
                  border border-white/10 hover:border-cyan-400/50
                  px-8 py-4 rounded-2xl
                  transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  active:scale-95
                  shadow-lg hover:shadow-cyan-500/20
                "
              >
                <Phone className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />

                <div className="text-left">
                  <p className="text-sm text-white/50">Call Anytime</p>
                  <p className="font-medium">
                    +91 82204 47669
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-20" />

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-10">

            {/* Brand Section */}
            <div className="lg:col-span-5 text-center sm:text-left">

              <h2
                className="
                  text-6xl md:text-7xl lg:text-8xl
                  font-bold
                  bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400
                  bg-clip-text text-transparent
                  mb-6 tracking-tight
                  hover:scale-[1.03]
                  transition-all duration-500
                  drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]
                "
              >
                Nexora
              </h2>

              <p className="text-white/60 text-[17px] leading-relaxed max-w-lg">
                We build modern digital experiences for growing businesses.
                Turning bold ideas into powerful, user-centered solutions.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4 text-white/60">

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Tamil Nadu, India</span>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Clock3 className="w-5 h-5 text-cyan-400" />
                  <span>Mon - Sat : 9AM - 8PM</span>
                </div>

              </div>

              {/* Social Links */}
              <div className="flex items-center gap-5 mt-8 justify-center sm:justify-start">

                {/* GitHub */}
                <a
                  href="https://github.com/shaikwasimS1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    hover:bg-purple-500/10
                    hover:border-purple-400/40
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    hover:bg-cyan-500/10
                    hover:border-cyan-400/40
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/_wasim_10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    hover:bg-pink-500/10
                    hover:border-pink-400/40
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <FaInstagram className="w-5 h-5" />
                </a>

                {/* Twitter/X */}
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center justify-center
                    hover:bg-blue-500/10
                    hover:border-blue-400/40
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 text-center sm:text-left">

              <h3 className="font-semibold text-xl mb-6 text-white tracking-wide">
                Quick Links
              </h3>

              <ul className="space-y-4 text-white/70 text-lg">

                {pages.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="
                        inline-block group
                        hover:text-white
                        transition-all duration-300
                        hover:translate-x-2
                      "
                    >
                      {item.name}

                      <span
                        className="
                          block h-px w-0
                          bg-gradient-to-r from-purple-400 to-cyan-400
                          group-hover:w-full
                          transition-all duration-300
                        "
                      />
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-4 text-center sm:text-left">

              <h3 className="font-semibold text-xl mb-6 text-white tracking-wide">
                Services
              </h3>

              <ul className="space-y-4 text-white/70 text-lg">

                {services.map((item, index) => (
                  <li
                    key={index}
                    className="
                      group cursor-pointer
                      hover:text-white
                      transition-all duration-300
                      hover:translate-x-2
                    "
                  >
                    {item}

                    <span
                      className="
                        block h-px w-0
                        bg-gradient-to-r from-purple-400 to-cyan-400
                        group-hover:w-full
                        transition-all duration-300
                      "
                    />
                  </li>
                ))}

              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="
              border-t border-white/10
              mt-20 pt-8
              flex flex-col sm:flex-row
              items-center justify-between
              gap-5
              text-sm text-white/50
            "
          >
            <p>
              © {currentYear} Nexora Studio. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <Link
                href="/privacy-policy"
                className="hover:text-white transition duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition duration-300"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>
        </div>
      </footer>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          fixed bottom-10 right-10 z-50
          w-16 h-16 rounded-3xl
          flex items-center justify-center
          bg-gradient-to-br from-purple-500 to-cyan-500
          shadow-2xl shadow-purple-500/40
          transition-all duration-500
          hover:scale-110 active:scale-95
          ${
            showBackToTop
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12 pointer-events-none'
          }
        `}
      >
        <ArrowUp className="w-7 h-7 text-white" />
      </button>
    </>
  );
}