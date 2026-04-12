'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1800);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('#card3d') as HTMLElement;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / r.width;
    const dy = (e.clientY - cy) / r.height;
    card.style.transform = `rotateX(${dy * -10}deg) rotateY(${dx * 12}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('#card3d') as HTMLElement;
    if (card) card.style.transform = 'rotateX(4deg) rotateY(0deg)';
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="relative min-h-[100dvh] bg-[#060608] overflow-hidden font-sans flex flex-col"
    >
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(96,60,220,0.18) 0%,transparent 70%),radial-gradient(ellipse 60% 40% at 80% 80%,rgba(0,200,180,0.10) 0%,transparent 60%)',
        }}
      />

      {/* Ambient Orbs */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{ width: 300, height: 300, top: -100, right: -80, background: 'rgba(100,60,255,0.12)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{ width: 200, height: 200, bottom: -60, left: -60, background: 'rgba(0,200,200,0.08)', filter: 'blur(60px)' }}
      />

      {/* Premium Shooting Stars */}
      <div className="shooting-stars absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="shooting-star absolute h-[1.5px] bg-gradient-to-r from-transparent via-[#67e8f9] to-white"
            style={{
              top: `${15 + Math.random() * 55}%`,
              left: `-${Math.random() * 40}px`,
              width: `${80 + Math.random() * 90}px`,
              animationDelay: `-${Math.random() * 7}s`,
              animationDuration: `${1.8 + Math.random() * 2.2}s`,
              opacity: 0.75 + Math.random() * 0.25,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[560px] flex-1 flex flex-col justify-center py-16 px-5">
        {/* Badge */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <div className="h-px w-8" style={{ background: 'linear-gradient(90deg,transparent,rgba(100,80,255,0.5))' }} />
          <span className="text-[10px] tracking-[4px] text-white/30 uppercase">Get in touch</span>
          <div className="h-px w-8" style={{ background: 'linear-gradient(90deg,rgba(100,80,255,0.5),transparent)' }} />
        </div>

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-[56px] font-black leading-[1.05] text-white" style={{ letterSpacing: '-2px' }}>
            Let&apos;s Create Something
            <br />
            <span style={{ background: 'linear-gradient(135deg,#7df9ff,#9b59ff 50%,#ff6fd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Legendary
            </span>
          </h2>
        </div>

        {/* 3D Card */}
        <div
          id="card3d"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(4deg)', transition: 'transform 0.6s cubic-bezier(.23,1,.32,1)' }}
        >
          <div style={{ position: 'absolute', bottom: -24, left: '10%', right: '10%', height: 40, background: 'radial-gradient(ellipse,rgba(120,80,255,0.35) 0%,transparent 70%)', filter: 'blur(12px)', transform: 'translateZ(-40px)' }} />

          <div
            className="relative overflow-hidden rounded-[28px] px-10 py-11"
            style={{
              background: 'linear-gradient(160deg,rgba(22,18,45,0.98) 0%,rgba(12,10,28,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7),0 0 0 1px rgba(120,80,255,0.1) inset,0 1px 0 rgba(255,255,255,0.12) inset',
            }}
          >
            {/* Top shimmer line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(150,100,255,0.6) 30%,rgba(0,220,200,0.6) 70%,transparent)' }} />

            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg,rgba(120,255,200,0.15),rgba(100,80,255,0.15))', border: '1px solid rgba(120,255,200,0.3)', animation: 'pulseRing 2s ease-out' }}>
                  <svg width="28" height="28" fill="none" stroke="rgba(100,255,180,0.9)" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Message Received</h3>
                <p className="text-sm text-white/40">Thank you! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <Field label="Your Name">
                  <FieldIcon>
                    <svg width="16" height="16" fill="none" stroke="rgba(150,120,255,1)" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </FieldIcon>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="field-input" />
                </Field>

                <Field label="Email Address">
                  <FieldIcon>
                    <svg width="16" height="16" fill="none" stroke="rgba(150,120,255,1)" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
                    </svg>
                  </FieldIcon>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="hello@youremail.com" className="field-input" />
                </Field>

                <Field label="Your Message" textarea>
                  <FieldIcon textarea>
                    <svg width="16" height="16" fill="none" stroke="rgba(150,120,255,1)" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </FieldIcon>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className="field-input" style={{ resize: 'none', borderRadius: 18, paddingTop: 18, lineHeight: 1.7 }} />
                </Field>

                <button type="submit" disabled={isLoading} className="btn-3d">
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <LoadingDot delay={0} /><LoadingDot delay={150} /><LoadingDot delay={300} />
                    </span>
                  ) : (
                    <span className="text-[11px] font-black tracking-[4px] uppercase" style={{ color: '#0a0614' }}>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] tracking-[3px] text-white/20 uppercase">
          Or email directly at <span className="text-white/55">hello@wcreators.com</span>
        </p>
      </div>

      {/* Bottom fade to prevent gap with footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />

      <style>{`
        .field-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 16px 18px 16px 48px;
          color: #fff;
          font-family: inherit;
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.18); }
        .field-input:focus {
          border-color: rgba(130,90,255,0.6);
          background: rgba(100,70,255,0.06);
          box-shadow: 0 0 0 3px rgba(120,80,255,0.12), 0 0 20px rgba(120,80,255,0.08);
          transform: translateZ(6px);
        }
        .btn-3d {
          width: 100%;
          padding: 20px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg,#7df9ff 0%,#9b59ff 50%,#ff6fd8 100%);
          transition: transform 0.2s, box-shadow 0.3s, filter 0.3s;
          margin-top: 6px;
        }
        .btn-3d:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(130,80,255,0.4),0 4px 12px rgba(0,0,0,0.4); filter: brightness(1.1); }
        .btn-3d:active { transform: scale(0.99); }
        .btn-3d:disabled { opacity: 0.7; cursor: not-allowed; }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(120,255,200,0.4); }
          100% { box-shadow: 0 0 0 24px rgba(120,255,200,0); }
        }
        @keyframes dotBounce {
          0%,80%,100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
        }

        /* Shooting Stars */
        .shooting-star {
          animation: shoot linear infinite;
          box-shadow: 0 0 15px #67e8f9;
        }
        @keyframes shoot {
          0% {
            transform: translateX(-150px) rotate(-28deg);
            opacity: 0.9;
          }
          100% {
            transform: translateX(900px) rotate(-28deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

/* Helper Components */
function Field({ label, textarea = false, children }: { label: string; textarea?: boolean; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <label className="mb-2.5 block text-[10px] tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
        {label}
      </label>
      <div className="relative">{children}</div>
    </div>
  );
}

function FieldIcon({ textarea = false, children }: { textarea?: boolean; children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-[18px] flex opacity-30" style={textarea ? { top: 20 } : { top: '50%', transform: 'translateY(-50%)' }}>
      {children}
    </span>
  );
}

function LoadingDot({ delay }: { delay: number }) {
  return (
    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#0a0614', animation: `dotBounce 0.9s ease-in-out ${delay}ms infinite` }} />
  );
}

