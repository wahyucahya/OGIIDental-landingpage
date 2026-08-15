import React, { useState } from 'react';
import { 
  IconMenu2, 
  IconX, 
  IconPhoneCall, 
  IconCalendarEvent, 
  IconClock, 
  IconMapPin 
} from '@tabler/icons-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#services' },
    { name: 'Jadwal Dokter', href: '#schedules' },
    { name: 'Profil Dokter', href: '#doctors' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-slate-300)',
      transition: 'all 0.3s ease'
    }}>
      {/* Top Banner Info */}
      <div style={{
        backgroundColor: 'var(--color-dark-gray)',
        color: 'var(--color-white)',
        fontSize: '0.8125rem',
        padding: '0.375rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              <IconMapPin size={15} color="var(--color-teal)" />
              Jl. Kesehatan No. 45, Jakarta Selatan
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              <IconClock size={15} color="var(--color-teal)" />
              Senin - Sabtu: 09:00 - 21:00
            </span>
          </div>
          <div>
            <a 
              href="https://wa.me/628123456789" 
              target="_blank" 
              rel="noreferrer"
              style={{
                color: 'var(--color-light-teal)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontWeight: 500
              }}
            >
              <IconPhoneCall size={14} />
              Bantuan WA: 0812-3456-789
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.5rem'
      }}>
        {/* Brand Logo */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none'
        }}>
          <img
            src="/logo.svg"
            alt="OGII DENTAL Logo"
            style={{
              height: '2.5rem',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-dark-gray)',
              lineHeight: 1.1
            }}>
              OGII <span style={{ color: 'var(--color-teal)' }}>DENTAL</span>
            </span>
            <span style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-slate-500)'
            }}>
              Modern Dentistry
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '1.75rem'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--color-dark-gray)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-teal)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark-gray)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <button
            onClick={onOpenBooking}
            className="nav-cta-btn"
            style={{
              backgroundColor: 'var(--color-teal)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              boxShadow: 'var(--shadow-teal)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-teal-dark)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-teal)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <IconCalendarEvent size={16} />
            <span className="cta-btn-text">Buat Janji</span>
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--color-slate-300)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.45rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-dark-gray)'
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-white)',
          borderBottom: '1px solid var(--color-slate-300)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: 'var(--color-dark-gray)',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 500,
                padding: '0.5rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-light-gray)',
                transition: 'background-color 0.2s ease'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Style element for responsive navigation display */}
      <style>{`
        @media (max-width: 640px) {
          .nav-cta-btn {
            padding: 0.4rem 0.75rem !important;
            font-size: 0.8125rem !important;
          }
          .cta-btn-text::after {
            content: " Temu";
          }
        }
        @media (min-width: 641px) {
          .cta-btn-text::after {
            content: " Temu";
          }
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .nav-cta-btn {
            padding: 0.625rem 1.25rem !important;
            font-size: 0.9375rem !important;
          }
        }
      `}</style>
    </header>
  );
};
