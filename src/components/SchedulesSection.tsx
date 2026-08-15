import React, { useState, useRef } from 'react';
import { 
  IconCalendar, 
  IconClock, 
  IconAlertCircle, 
  IconFilter,
  IconCircleCheck
} from '@tabler/icons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DOCTORS_DATA, SCHEDULES_DATA } from '../services/mockData';
import type { Doctor, Schedule, ScheduleStatus } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface SchedulesSectionProps {
  onSelectDoctorSchedule: (doctor: Doctor, schedule: Schedule) => void;
}

export const SchedulesSection: React.FC<SchedulesSectionProps> = ({ onSelectDoctorSchedule }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedDay, setSelectedDay] = useState<string>('Semua');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('Semua');

  const daysList = ['Semua', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

  useGSAP(() => {
    // Header reveal
    gsap.fromTo('.gsap-schedules-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-schedules-header',
          start: 'top 85%'
        }
      }
    );

    // Filter bar reveal
    gsap.fromTo('.gsap-schedules-filter',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-schedules-filter',
          start: 'top 85%'
        }
      }
    );

    // Cards reveal
    gsap.fromTo('.gsap-schedule-card',
      { opacity: 0, y: 45 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-schedules-grid',
          start: 'top 85%'
        }
      }
    );
  }, { scope: sectionRef, dependencies: [selectedDay, selectedDoctorId] });

  // Status Badge Styling Helper
  const getStatusBadge = (status: ScheduleStatus) => {
    switch (status) {
      case 'Tersedia':
        return {
          bg: 'var(--color-success-bg)',
          text: 'var(--color-success-text)',
          border: 'var(--color-success-border)',
          label: 'Tersedia'
        };
      case 'Terbatas':
        return {
          bg: 'var(--color-warning-bg)',
          text: 'var(--color-warning-text)',
          border: 'var(--color-warning-border)',
          label: 'Sisa Kuota Sedikit'
        };
      case 'Penuh':
        return {
          bg: 'var(--color-danger-bg)',
          text: 'var(--color-danger-text)',
          border: 'var(--color-danger-border)',
          label: 'Penuh'
        };
      case 'Tidak Praktik':
      default:
        return {
          bg: 'var(--color-neutral-bg)',
          text: 'var(--color-neutral-text)',
          border: 'var(--color-neutral-border)',
          label: 'Libur Praktik'
        };
    }
  };

  // Filter schedules according to day and doctor filter
  const filteredSchedules = SCHEDULES_DATA.filter((sch) => {
    const matchDay = selectedDay === 'Semua' || sch.day_of_week === selectedDay;
    const matchDoctor = selectedDoctorId === 'Semua' || sch.doctor_id === selectedDoctorId;
    return matchDay && matchDoctor;
  });

  return (
    <section ref={sectionRef} id="schedules" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="gsap-schedules-header" style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem auto' }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: 700,
            color: 'var(--color-teal)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Jadwal Praktik Real-time
          </span>
          <h2 style={{ fontSize: '2.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Jadwal Dokter & Status Ketersediaan
          </h2>
          <p style={{ color: 'var(--color-slate-600)', fontSize: '1rem' }}>
            Pilih hari atau dokter pilihan Anda untuk melihat kuota ketersediaan janji temu langsung.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="gsap-schedules-filter" style={{
          backgroundColor: 'var(--color-light-gray)',
          padding: '1.25rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-slate-300)',
          marginBottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-dark-gray)' }}>
            <IconFilter size={20} color="var(--color-teal)" />
            Filter Jadwal Dokter:
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Day Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {daysList.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  style={{
                    backgroundColor: selectedDay === day ? 'var(--color-teal)' : 'var(--color-white)',
                    color: selectedDay === day ? 'var(--color-white)' : 'var(--color-dark-gray)',
                    border: '1px solid',
                    borderColor: selectedDay === day ? 'var(--color-teal)' : 'var(--color-slate-300)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.375rem 0.875rem',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Doctor Select Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)' }}>Pilih Dokter:</span>
              <select
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
                style={{
                  padding: '0.45rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-slate-300)',
                  backgroundColor: 'var(--color-white)',
                  fontSize: '0.875rem',
                  color: 'var(--color-dark-gray)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="Semua">Semua Dokter Spesialis</option>
                {DOCTORS_DATA.map((doc) => (
                  <option key={doc.id} value={doc.id}>{doc.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Schedules Cards Grid */}
        {filteredSchedules.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'var(--color-light-gray)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--color-slate-300)'
          }}>
            <IconAlertCircle size={40} color="var(--color-slate-500)" style={{ marginBottom: '0.5rem' }} />
            <h4 style={{ fontSize: '1.125rem', color: 'var(--color-dark-gray)' }}>Tidak Ada Jadwal Ditemukan</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>
              Silakan ganti kriteria filter hari atau dokter Anda.
            </p>
          </div>
        ) : (
          <div className="gsap-schedules-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredSchedules.map((sch) => {
              const doctor = DOCTORS_DATA.find((d) => d.id === sch.doctor_id);
              if (!doctor) return null;

              const badge = getStatusBadge(sch.status);
              const isAvailable = sch.status === 'Tersedia' || sch.status === 'Terbatas';

              return (
                <div
                  key={sch.id}
                  className="gsap-schedule-card"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(226, 232, 240, 0.7)',
                    padding: '1.5rem',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'rgba(44, 122, 123, 0.4)';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.7)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    {/* Header with Doctor Photo & Name */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                      <img
                        src={doctor.photo_url}
                        alt={doctor.name}
                        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <h4 style={{ fontSize: '1rem', color: 'var(--color-dark-gray)', lineHeight: 1.2 }}>
                          {doctor.name}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-teal)', fontWeight: 500 }}>
                          {doctor.specialization}
                        </span>
                      </div>
                    </div>

                    {/* Schedule Time & Day */}
                    <div style={{
                      backgroundColor: 'var(--color-light-gray)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.75rem 1rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.9375rem' }}>
                        <IconCalendar size={18} color="var(--color-teal)" />
                        {sch.day_of_week}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-slate-600)' }}>
                        <IconClock size={16} />
                        {sch.start_time} - {sch.end_time} WIB
                      </div>
                    </div>
                  </div>

                  {/* Status & Action */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--color-slate-100)'
                  }}>
                    <span style={{
                      backgroundColor: badge.bg,
                      color: badge.text,
                      border: `1px solid ${badge.border}`,
                      padding: '0.25rem 0.625rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <IconCircleCheck size={14} />
                      {badge.label}
                    </span>

                    <button
                      disabled={!isAvailable}
                      onClick={() => onSelectDoctorSchedule(doctor, sch)}
                      style={{
                        backgroundColor: isAvailable ? 'var(--color-teal)' : 'var(--color-slate-300)',
                        color: isAvailable ? 'var(--color-white)' : 'var(--color-slate-500)',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: isAvailable ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isAvailable ? 'Booking Waktu Ini' : 'Tidak Tersedia'}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
