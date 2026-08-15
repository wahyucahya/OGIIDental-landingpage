import React from 'react';
import { 
  IconSparkles, 
  IconSun, 
  IconGridDots, 
  IconBuildingBridge, 
  IconStethoscope, 
  IconActivity, 
  IconArrowRight
} from '@tabler/icons-react';
import { SERVICES_DATA } from '../services/mockData';
import type { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Dynamic Tabler Icon Resolver (with large decorative sizing & subtle teal color)
  const renderBackgroundIcon = (iconName: string) => {
    const props = { size: 140, color: 'rgba(44, 122, 123, 0.07)', stroke: 1.2 };
    switch (iconName) {
      case 'IconSparkles': return <IconSparkles {...props} />;
      case 'IconSun': return <IconSun {...props} />;
      case 'IconBrandGridper': return <IconGridDots {...props} />;
      case 'IconBuildingBridge': return <IconBuildingBridge {...props} />;
      case 'IconStethoscope': return <IconStethoscope {...props} />;
      case 'IconTooth': return <IconActivity {...props} />;
      default: return <IconActivity {...props} />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3.5rem auto' }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: 700,
            color: 'var(--color-teal)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Layanan Perawatan Gigi
          </span>
          <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--color-dark-gray)' }}>
            Solusi Kesehatan & Estetika Gigi Terbaik
          </h2>
          <p style={{ color: 'var(--color-slate-600)', fontSize: '1rem' }}>
            Kami menyediakan layanan komprehensif mulai dari pembersihan rutin, perawatan estetik, hingga pembedahan impaksi oleh spesialis terpercaya.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                border: '1px solid rgba(226, 232, 240, 0.7)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(44, 122, 123, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.7)';
              }}
            >
              {/* Large Watermark Background Icon */}
              <div style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                pointerEvents: 'none',
                zIndex: 0,
                transition: 'transform 0.4s ease'
              }}>
                {renderBackgroundIcon(service.icon)}
              </div>

              {/* Card Content Layer */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-teal-dark)',
                  backgroundColor: 'var(--color-light-teal)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '1rem'
                }}>
                  {service.category}
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-dark-gray)', fontWeight: 700 }}>
                  {service.name}
                </h3>

                <p style={{ color: 'var(--color-slate-600)', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {service.description}
                </p>
              </div>

              {/* Bottom Footer Action Layer */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(241, 245, 249, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)', display: 'block' }}>Estimasi Biaya:</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-teal-dark)' }}>
                    {service.priceEstimate}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  style={{
                    backgroundColor: 'var(--color-light-teal)',
                    color: 'var(--color-teal-dark)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.5rem 0.875rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-teal)';
                    e.currentTarget.style.color = 'var(--color-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-light-teal)';
                    e.currentTarget.style.color = 'var(--color-teal-dark)';
                  }}
                >
                  Pilih Layanan
                  <IconArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
