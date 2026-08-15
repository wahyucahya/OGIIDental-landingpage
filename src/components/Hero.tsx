import React from 'react';
import { 
  IconCalendarCheck, 
  IconShieldCheck, 
  IconUserCheck, 
  IconStar,
  IconArrowRight
} from '@tabler/icons-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" style={{
      position: 'relative',
      backgroundColor: 'var(--color-white)',
      overflow: 'hidden',
      paddingTop: '4rem',
      paddingBottom: '5rem',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Image Layer on Right Half */}
      <div 
        className="hero-bg-right"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '50%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      >
        {/* Soft Dark Gradient Overlay over Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.1) 40%, rgba(0,0,0,0.3) 100%)'
        }} />
      </div>

      {/* SVG Wave Divider Separating Left Content and Right Image */}
      <div 
        className="hero-wave-divider"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '42%',
          width: '120px',
          zIndex: 2,
          pointerEvents: 'none',
          height: '100%'
        }}
      >
        <svg 
          viewBox="0 0 100 800" 
          preserveAspectRatio="none" 
          style={{ width: '100%', height: '100%', fill: 'var(--color-white)' }}
        >
          <path d="M0,0 C40,200 80,300 30,500 C-20,700 50,750 0,800 L0,800 L0,0 Z" />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div style={{
          maxWidth: '38rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }} className="animate-fade-in">
          
          {/* Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-light-teal)',
            color: 'var(--color-teal-dark)',
            padding: '0.4rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1.25rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span>Klinik Gigi Modern & Terpercaya di Jakarta</span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            color: 'var(--color-dark-gray)',
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem'
          }}>
            Senyum Sehat & Indah Dimulai dari <span className="text-gradient">OGII DENTAL</span>
          </h1>

          {/* Sub-headline */}
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-slate-600)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Pengalaman perawatan gigi tanpa rasa cemas dengan dokter spesialis berpengalaman, teknologi radiologi digital 3D, dan sistem booking tanpa antre.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            width: '100%',
            marginBottom: '2.5rem'
          }}>
            <button
              onClick={onOpenBooking}
              style={{
                backgroundColor: 'var(--color-teal)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '0.875rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                boxShadow: 'var(--shadow-teal)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-teal-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-teal)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <IconCalendarCheck size={20} />
              Booking Janji Temu Online
              <IconArrowRight size={18} />
            </button>

            <a
              href="#schedules"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--color-dark-gray)',
                border: '1px solid var(--color-slate-300)',
                borderRadius: 'var(--radius-md)',
                padding: '0.875rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-teal)';
                e.currentTarget.style.color = 'var(--color-teal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-slate-300)';
                e.currentTarget.style.color = 'var(--color-dark-gray)';
              }}
            >
              Cek Jadwal Dokter
            </a>
          </div>

          {/* Floating Trust Badge & Doctor Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            padding: '1rem 1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-slate-300)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&q=80"
                alt="drg. Ogi Prayoga"
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-dark-gray)' }}>
                  drg. Ogi Prayoga, Sp.KG
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-teal)', fontWeight: 600 }}>
                  Head Dentist & Estetika Gigi
                </div>
              </div>
            </div>

            <div style={{ height: '30px', width: '1px', backgroundColor: 'var(--color-slate-300)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <IconStar size={20} color="#F59E0B" fill="#F59E0B" />
              <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-dark-gray)' }}>
                4.9 / 5.0
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>(1,200+ Pasien)</span>
            </div>
          </div>

          {/* Trust Features */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <IconShieldCheck size={20} color="var(--color-teal)" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-dark-gray)' }}>
                100% Alat Steril
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <IconUserCheck size={20} color="var(--color-teal)" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-dark-gray)' }}>
                Dokter Spesialis UI/UGM
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Responsive Styles for Wave & Background Image */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-bg-right {
            width: 100% !important;
            opacity: 0.15;
          }
          .hero-wave-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
