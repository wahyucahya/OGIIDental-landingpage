import React, { useState } from 'react';
import { 
  IconSchool, 
  IconAward, 
  IconStar, 
  IconCalendarEvent, 
  IconX
} from '@tabler/icons-react';
import { DOCTORS_DATA } from '../services/mockData';
import type { Doctor } from '../types';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  const [activeDoctorModal, setActiveDoctorModal] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
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
            Tim Spesialis Kami
          </span>
          <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Dokter Gigi Profesional & Berdedikasi
          </h2>
          <p style={{ color: 'var(--color-slate-600)', fontSize: '1rem' }}>
            Seluruh tim medis kami merupakan lulusan universitas ternama dengan sertifikasi spesialis lengkap dan pengalaman bertahun-tahun.
          </p>
        </div>

        {/* Doctors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-slate-300)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Doctor Image Container */}
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <img
                  src={doctor.photo_url}
                  alt={doctor.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.875rem',
                  right: '0.875rem',
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.25rem 0.625rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-gray)'
                }}>
                  <IconStar size={16} color="#F59E0B" fill="#F59E0B" />
                  {doctor.rating}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-dark-gray)', marginBottom: '0.25rem' }}>
                    {doctor.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-teal)', marginBottom: '0.875rem' }}>
                    {doctor.specialization}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-slate-600)', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <IconSchool size={16} color="var(--color-slate-500)" />
                      {doctor.education}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <IconAward size={16} color="var(--color-slate-500)" />
                      Pengalaman {doctor.experience_years} Tahun
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-slate-100)' }}>
                  <button
                    onClick={() => setActiveDoctorModal(doctor)}
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--color-light-teal)',
                      color: 'var(--color-teal-dark)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Lihat Profil
                  </button>

                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    style={{
                      backgroundColor: 'var(--color-teal)',
                      color: 'var(--color-white)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.5rem 0.875rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                  >
                    <IconCalendarEvent size={16} />
                    Janji
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Doctor Detail Modal */}
      {activeDoctorModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '560px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            animation: 'fadeIn 0.3s ease'
          }}>
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveDoctorModal(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <IconX size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={activeDoctorModal.photo_url}
                  alt={activeDoctorModal.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-teal)', backgroundColor: 'var(--color-light-teal)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                  {activeDoctorModal.specialization}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-dark-gray)', marginBottom: '0.25rem' }}>
                  {activeDoctorModal.name}
                </h3>
                
                <p style={{ color: 'var(--color-slate-600)', fontSize: '0.9375rem', lineHeight: 1.6, margin: '1rem 0 1.5rem 0' }}>
                  {activeDoctorModal.description}
                </p>

                <div style={{ backgroundColor: 'var(--color-light-gray)', borderRadius: 'var(--radius-lg)', padding: '1rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconSchool color="var(--color-teal)" size={18} />
                    <strong>Pendidikan:</strong> {activeDoctorModal.education}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconAward color="var(--color-teal)" size={18} />
                    <strong>Pengalaman:</strong> {activeDoctorModal.experience_years} Tahun Praktik
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => {
                      const doc = activeDoctorModal;
                      setActiveDoctorModal(null);
                      onSelectDoctor(doc);
                    }}
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--color-teal)',
                      color: 'var(--color-white)',
                      border: 'none',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <IconCalendarEvent size={18} />
                    Buat Janji Temu dengan Dokter Ini
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
