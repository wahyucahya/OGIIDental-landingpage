import React from 'react';
import { 
  IconBrandWhatsapp, 
  IconBrandInstagram, 
  IconBrandFacebook, 
  IconArrowUp
} from '@tabler/icons-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#111827',
      color: '#9CA3AF',
      borderTop: '1px solid #1F2937',
      paddingTop: '4rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/logo.svg"
                alt="OGII DENTAL Logo"
                style={{
                  height: '2.25rem',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em' }}>
                OGII <span style={{ color: 'var(--color-teal)' }}>DENTAL</span>
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#9CA3AF', marginBottom: '1.25rem' }}>
              Platform layanan kedokteran gigi modern yang mengutamakan kenyamanan, kepuasan pasien, dan hasil estetika senyum terbaik.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" aria-label="WhatsApp OGII DENTAL" style={{ color: '#D1D5DB', backgroundColor: '#1F2937', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconBrandWhatsapp size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram OGII DENTAL" style={{ color: '#D1D5DB', backgroundColor: '#1F2937', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconBrandInstagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook OGII DENTAL" style={{ color: '#D1D5DB', backgroundColor: '#1F2937', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconBrandFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '1rem' }}>Navigasi Cepat</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li><a href="#hero" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Beranda Utama</a></li>
              <li><a href="#services" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Layanan & Perawatan</a></li>
              <li><a href="#schedules" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Jadwal Dokter Real-time</a></li>
              <li><a href="#doctors" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Profil Tim Dokter</a></li>
              <li><a href="#gallery" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Galeri Fasilitas Klinik</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '1rem' }}>Layanan Unggulan</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li>Teeth Whitening (Pemutihan Gigi)</li>
              <li>Pemasangan Invisalign & Behel</li>
              <li>Implan Gigi Permanen</li>
              <li>Scaling Ultrasonic</li>
              <li>Kedokteran Gigi Anak</li>
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', marginBottom: '1rem' }}>Jam Operasional</h4>
            <div style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div>Senin - Sabtu: <span style={{ color: 'var(--color-white)' }}>09:00 - 21:00 WIB</span></div>
              <div>Minggu & Libur: <span style={{ color: 'var(--color-white)' }}>10:00 - 16:00 WIB</span></div>
              <div style={{ marginTop: '0.5rem', color: 'var(--color-light-teal)', fontWeight: 500 }}>
                Layanan Darurat Gigi Tersedia 24 Jam via Call Center
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div style={{
          borderTop: '1px solid #1F2937',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem'
        }}>
          <div>
            &copy; {new Date().getFullYear()} OGII DENTAL. Hak Cipta Dilindungi Undang-Undang.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            style={{
              backgroundColor: '#1F2937',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.8125rem'
            }}
          >
            <IconArrowUp size={16} />
            Ke Atas
          </button>
        </div>

      </div>
    </footer>
  );
};
