import React, { useState, useEffect } from 'react';
import { 
  IconStar, 
  IconChevronLeft, 
  IconChevronRight, 
  IconQuote, 
  IconChevronDown, 
  IconChevronUp,
  IconMapPin,
  IconPhoneCall,
  IconClock
} from '@tabler/icons-react';
import { GALLERY_DATA, TESTIMONIALS_DATA, FAQ_DATA } from '../services/mockData';

export const GalleryTestimonialsFaq: React.FC = () => {
  // Gallery Filter State
  const [activeGalleryCat, setActiveGalleryCat] = useState<string>('Semua');
  const galleryCategories = ['Semua', 'Ruang Perawatan', 'Fasilitas', 'Peralatan', 'Ruang Tunggu'];

  const filteredGallery = activeGalleryCat === 'Semua' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter((g) => g.category === activeGalleryCat);

  // 3D Infinite Auto-Scrolling Testimonials Carousel State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const totalTestimonials = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  // Auto-scroll Timer (4 seconds interval, pauses on mouse hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  // Helper to calculate relative position in infinite loop (-1: left, 0: center, 1: right, others: hidden)
  const getCardPositionStyle = (index: number) => {
    let diff = index - currentIndex;
    
    // Normalize diff for infinite wrap-around
    if (diff < -Math.floor(totalTestimonials / 2)) {
      diff += totalTestimonials;
    } else if (diff > Math.floor(totalTestimonials / 2)) {
      diff -= totalTestimonials;
    }

    if (diff === 0) {
      // Center Active Card (Largest size, full opacity, elevated shadow)
      return {
        transform: 'translateX(0%) scale(1.08)',
        opacity: 1,
        zIndex: 10,
        boxShadow: '0 20px 35px -10px rgba(44, 122, 123, 0.18), 0 10px 15px -5px rgba(0, 0, 0, 0.05)',
        border: '2px solid var(--color-teal)',
        pointerEvents: 'auto' as const
      };
    } else if (diff === -1 || (currentIndex === 0 && index === totalTestimonials - 1)) {
      // Left Neighbor Card (Smaller scale, reduced opacity)
      return {
        transform: 'translateX(-65%) scale(0.85)',
        opacity: 0.55,
        zIndex: 5,
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-slate-300)',
        pointerEvents: 'auto' as const,
        cursor: 'pointer'
      };
    } else if (diff === 1 || (currentIndex === totalTestimonials - 1 && index === 0)) {
      // Right Neighbor Card (Smaller scale, reduced opacity)
      return {
        transform: 'translateX(65%) scale(0.85)',
        opacity: 0.55,
        zIndex: 5,
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-slate-300)',
        pointerEvents: 'auto' as const,
        cursor: 'pointer'
      };
    } else {
      // Farther cards (hidden in background)
      return {
        transform: `translateX(${diff > 0 ? 120 : -120}%) scale(0.7)`,
        opacity: 0,
        zIndex: 1,
        pointerEvents: 'none' as const
      };
    }
  };

  // FAQ Accordion State
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* 1. GALLERY SECTION */}
      <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Galeri Klinik
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Fasilitas & Suasana Klinik OGII DENTAL
            </h2>
            <p style={{ color: 'var(--color-slate-600)', fontSize: '1rem' }}>
              Lihat langsung kenyamanan ruang perawatan, kebersihan lobby, dan kelengkapan teknologi medis mutakhir kami.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryCat(cat)}
                style={{
                  backgroundColor: activeGalleryCat === cat ? 'var(--color-teal)' : 'var(--color-light-gray)',
                  color: activeGalleryCat === cat ? 'var(--color-white)' : 'var(--color-dark-gray)',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  height: '260px',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-slate-300)'
                }}
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26,32,44,0.85) 0%, rgba(0,0,0,0) 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  color: 'var(--color-white)'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-light-teal)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--color-white)', marginTop: '0.25rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INFINITE 3D AUTO-SCROLLING TESTIMONIALS SECTION */}
      <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Ulasan Pasien
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Apa Kata Mereka Tentang OGII DENTAL?
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate-500)' }}>
              Arahkan kursor ke kartu untuk menghentikan guliran otomatis
            </p>
          </div>

          {/* Carousel Stage Container */}
          <div 
            style={{
              position: 'relative',
              maxWidth: '960px',
              height: '380px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {TESTIMONIALS_DATA.map((item, idx) => {
              const posStyle = getCardPositionStyle(idx);
              const isCenter = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => !isCenter && setCurrentIndex(idx)}
                  style={{
                    position: 'absolute',
                    width: 'clamp(290px, 60vw, 540px)',
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-xl)',
                    padding: isCenter ? '2.5rem 2rem' : '1.75rem 1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    ...posStyle
                  }}
                >
                  <IconQuote size={isCenter ? 44 : 32} color="var(--color-light-teal)" style={{ position: 'absolute', top: '1.25rem', left: '1.5rem', opacity: 0.7 }} />
                  
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <IconStar key={i} size={isCenter ? 20 : 16} color="#F59E0B" fill="#F59E0B" />
                    ))}
                  </div>

                  {/* Comment Text */}
                  <p style={{
                    fontSize: isCenter ? '1.125rem' : '0.9375rem',
                    color: 'var(--color-dark-gray)',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    marginBottom: isCenter ? '1.5rem' : '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: isCenter ? 4 : 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    "{item.comment}"
                  </p>

                  {/* Patient Info */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.875rem' }}>
                    <img
                      src={item.avatar_url}
                      alt={item.patient_name}
                      style={{
                        width: isCenter ? '48px' : '38px',
                        height: isCenter ? '48px' : '38px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <h4 style={{ fontSize: isCenter ? '1rem' : '0.875rem', color: 'var(--color-dark-gray)' }}>{item.patient_name}</h4>
                      <span style={{ fontSize: isCenter ? '0.8125rem' : '0.75rem', color: 'var(--color-teal)', fontWeight: 600 }}>
                        {item.service_received}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              style={{
                position: 'absolute',
                left: '0.5rem',
                zIndex: 20,
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-slate-300)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <IconChevronLeft size={24} color="var(--color-dark-gray)" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              style={{
                position: 'absolute',
                right: '0.5rem',
                zIndex: 20,
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-slate-300)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <IconChevronRight size={24} color="var(--color-dark-gray)" />
            </button>

          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: idx === currentIndex ? 'var(--color-teal)' : 'var(--color-slate-300)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3.5rem auto' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Pertanyaan Umum
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Frequently Asked Questions (FAQ)
            </h2>
            <p style={{ color: 'var(--color-slate-600)', fontSize: '1rem' }}>
              Jawaban cepat untuk pertanyaan yang paling sering ditanyakan oleh pasien baru kami.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    border: '1px solid var(--color-slate-300)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    backgroundColor: isOpen ? 'var(--color-light-gray)' : 'var(--color-white)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--color-dark-gray)',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <IconChevronUp size={20} color="var(--color-teal)" /> : <IconChevronDown size={20} />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      color: 'var(--color-slate-600)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--color-slate-300)'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTACT & MAPS INTEGRATION SECTION */}
      <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-dark-gray)', color: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-light-teal)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Lokasi & Kontak
              </span>
              <h2 style={{ fontSize: '2.25rem', color: 'var(--color-white)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                Kunjungi Klinik OGII DENTAL
              </h2>
              <p style={{ color: 'var(--color-slate-300)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Kami siap menyambut Anda dengan fasilitas parkir luas, akses ramah disabilitas, serta lokasi strategis di pusat kota.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <IconMapPin size={24} color="var(--color-teal)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-white)' }}>Alamat Klinik</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate-300)' }}>
                      Jl. Kesehatan Raya No. 45, Kebayoran Baru, Jakarta Selatan 12110
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <IconPhoneCall size={24} color="var(--color-teal)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-white)' }}>Telepon & WhatsApp</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate-300)' }}>
                      (021) 765-4321 / +62 812-3456-7890
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <IconClock size={24} color="var(--color-teal)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-white)' }}>Jam Operasional</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate-300)' }}>
                      Senin - Sabtu: 09.00 - 21.00 WIB <br />
                      Minggu & Hari Libur: 10.00 - 16.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps View */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              height: '380px',
              border: '2px solid rgba(255,255,255,0.1)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <iframe
                title="Lokasi OGII DENTAL Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2731837887754!2d106.8012!3d-6.2274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d3f3f3f3f%3A0x123456789abcdef!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
