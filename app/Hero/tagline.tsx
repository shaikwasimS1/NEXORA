'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Utilities/Button';

export default function Tagline() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1558655146-9f40138ed1cb?w=400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80",
  ];

  const positions = [-340, -170, 0, 170, 340];
  const rotations = [-12, -6, 0, 6, 12];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setRotateX(((e.clientY - cy) / r.height) * -16);
    setRotateY(((e.clientX - cx) / r.width) * 16);
    setIsMoving(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsMoving(false);
  };

  const getSlideStyle = (i: number): React.CSSProperties => {
    const o = (i - currentIndex + images.length) % images.length;
    const a = o > 2 ? o - images.length : o;
    const p = a + 2;

    return {
      transform: `translateX(${positions[p] ?? 0}px) rotate(${rotations[p] ?? 0}deg) scale(${a === 0 ? 1.05 : 0.88})`,
      opacity: a === 0 ? 0.22 : Math.abs(a) === 1 ? 0.08 : 0.03,
      filter: a === 0 ? 'blur(0px)' : 'blur(4px)',
      zIndex: a === 0 ? 5 : 1,
      transition: 'all 1.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      width: 300,
      height: 420,
      objectFit: 'cover',
      borderRadius: 22,
      boxShadow: a === 0 ? '0 25px 50px -12px rgb(0 0 0 / 0.4)' : 'none',
    };
  };

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        .badge-dot { animation: pulse-dot 2s infinite; }

        .btn-primary {
          background: linear-gradient(135deg, #7c3aed, #ec4899, #6366f1);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-primary:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.6);
        }
        .btn-primary:active {
          transform: scale(0.96);
        }

        .tag {
          transition: all 0.3s ease;
        }
        .tag:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(165, 243, 252, 0.4);
          color: #a5f3fc;
          transform: translateY(-2px);
        }
      `}</style>

      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050508',
          position: 'relative',
          overflow: 'hidden',
          padding: '2rem 1rem',
        }}
      >
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)`,
          backgroundSize: '55px 55px',
        }} />

        {/* Soft Glow Orbs */}
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(120,80,255,.16) 0%,transparent 65%)', top: -120, left: -100 }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,220,220,.13) 0%,transparent 65%)', bottom: -80, right: -80 }} />

        {/* Background Sliding Images */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          {images.map((s, i) => (
            <img key={i} src={s} style={getSlideStyle(i)} />
          ))}
        </div>

        {/* Main Glass Card */}
        <div
          ref={cardRef}
          style={{
            position: 'relative',
            zIndex: 20,
            maxWidth: 560,
            width: '100%',
            transform: `perspective(1700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: isMoving ? 'none' : 'transform 0.9s cubic-bezier(0.23,1,0.32,1)',
          }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.045)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 32,
            padding: '3.8rem 3.2rem',
            position: 'relative',
            boxShadow: '0 30px 70px -15px rgba(0,0,0,0.6)',
          }}>

            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 9999,
              padding: '8px 16px',
              fontSize: 13,
              marginBottom: '2rem',
              color: '#e0f2fe'
            }}>
              <div className="badge-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#67e8f9' }} />
              Now accepting new projects — 2026
            </div>

            <h1 style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: '1.4rem',
            }}>
              Enterprise-Grade<br />
              <span style={{
                background: 'linear-gradient(115deg, #c084fc, #67e8f9, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Architecture
              </span>
              <br />& Scalability
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 420,
              marginBottom: '2.2rem',
              fontSize: '1.05rem'
            }}>
              Specialized in enterprise applications, authentication systems, task management platforms, and performance-focused backend architecture.
            </p>

            {/* Hoverable Tags */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '2.8rem' }}>
              {['ASP.NET Core', 'REST APIs', 'SQL Server', 'React / Next.js', 'Clean Architecture'].map((t) => (
                <span
                  key={t}
                  className="tag"
                  style={{
                    fontSize: 12.5,
                    color: 'rgba(255,255,255,0.55)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 9999,
                    padding: '7px 16px',
                    cursor: 'default'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons with Hover Effects */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/component/Contact">
                <Button
                  text="Contact Me"
                  className="btn-primary"
                  style={{
                    border: 0,
                    padding: '16px 34px',
                    borderRadius: 16,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.05rem'
                  }}
                />


              </Link>

              <Link href="/component/Portfolio">

                <Button
                  text=" View Projects →"
                  className="btn-secondary"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.3)', padding: '16px 28px', borderRadius: 16, color: 'rgba(255,255,255,0.85)', fontWeight: 500
                  }} />


              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(0deg,#050508,transparent)' }} />
      </section>
    </>
  );
}