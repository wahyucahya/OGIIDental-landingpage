import React, { useState } from 'react';
import { 
  IconX, 
  IconCheck
} from '@tabler/icons-react';
import { DOCTORS_DATA, SERVICES_DATA } from '../services/mockData';
import type { Doctor, Service, Schedule, Appointment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: Doctor | null;
  initialService?: Service | null;
  initialSchedule?: Schedule | null;
  onBookingSuccess: (appointment: Appointment) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  initialService,
  initialSchedule,
  onBookingSuccess
}) => {
  // Use initialSchedule if provided
  const defaultDocId = initialSchedule?.doctor_id || initialDoctor?.id || DOCTORS_DATA[0].id;
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(defaultDocId);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialService?.id || SERVICES_DATA[0].id);
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>(initialSchedule?.start_time || '10:00');
  const [notes, setNotes] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [createdAppointment, setCreatedAppointment] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedDoc = DOCTORS_DATA.find((d) => d.id === selectedDoctorId);
    const selectedSrv = SERVICES_DATA.find((s) => s.id === selectedServiceId);

    const newAppointment: Appointment = {
      id: `app-${Date.now()}`,
      doctor_id: selectedDoctorId,
      doctor_name: selectedDoc?.name || '',
      service_id: selectedServiceId,
      service_name: selectedSrv?.name || '',
      patient_name: patientName,
      patient_phone: patientPhone,
      patient_email: patientEmail,
      appointment_date: appointmentDate || new Date().toISOString().split('T')[0],
      appointment_time: appointmentTime,
      notes: notes,
      status: 'Disetujui',
      created_at: new Date().toLocaleString('id-ID')
    };

    setCreatedAppointment(newAppointment);
    setIsSubmitted(true);
    onBookingSuccess(newAppointment);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCreatedAppointment(null);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(5px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '540px',
        width: '100%',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        position: 'relative',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        margin: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={resetForm}
          aria-label="Tutup Form Booking"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'var(--color-light-gray)',
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

        {!isSubmitted ? (
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <img
                src="/logo.svg"
                alt="OGII DENTAL Logo"
                style={{
                  height: '2.25rem',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.375rem', color: 'var(--color-dark-gray)' }}>Booking Janji Temu Online</h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)' }}>OGII DENTAL Medical Center</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem', marginTop: '1.25rem' }}>
              
              {/* Select Doctor */}
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                  Pilih Dokter Spesialis
                </label>
                <select
                  required
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-slate-300)',
                    fontSize: '0.9375rem',
                    backgroundColor: 'var(--color-white)'
                  }}
                >
                  {DOCTORS_DATA.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.specialization}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Service */}
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                  Pilih Layanan Perawatan
                </label>
                <select
                  required
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-slate-300)',
                    fontSize: '0.9375rem',
                    backgroundColor: 'var(--color-white)'
                  }}
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} ({srv.priceEstimate})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                    Tanggal Kunjungan
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                    Jam Konsultasi
                  </label>
                  <select
                    required
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      fontSize: '0.875rem',
                      backgroundColor: 'var(--color-white)'
                    }}
                  >
                    <option value="09:00">09:00 WIB</option>
                    <option value="10:00">10:00 WIB</option>
                    <option value="11:00">11:00 WIB</option>
                    <option value="13:00">13:00 WIB</option>
                    <option value="14:00">14:00 WIB</option>
                    <option value="15:00">15:00 WIB</option>
                    <option value="16:00">16:00 WIB</option>
                    <option value="19:00">19:00 WIB</option>
                  </select>
                </div>
              </div>

              {/* Patient Personal Data */}
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                  Nama Lengkap Pasien
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-slate-300)',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                    Nomor WhatsApp / HP
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08123456789"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-slate-300)',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-dark-gray)', marginBottom: '0.375rem' }}>
                  Keluhan / Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tuliskan gejala atau keluhan singkat yang Anda rasakan..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-slate-300)',
                    fontSize: '0.875rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--color-teal)',
                  color: 'var(--color-white)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.875rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  boxShadow: 'var(--shadow-teal)',
                  transition: 'all 0.2s ease'
                }}
              >
                Konfirmasi & Buat Janji Temu
              </button>
            </form>
          </div>
        ) : (
          /* Booking Success Ticket View */
          <div style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              backgroundColor: 'var(--color-success-bg)',
              color: 'var(--color-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <IconCheck size={36} stroke={3} />
            </div>

            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-dark-gray)', marginBottom: '0.5rem' }}>
              Janji Temu Berhasil Dibuat!
            </h3>
            <p style={{ color: 'var(--color-slate-600)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
              Tiket konfirmasi telah dikirim ke WhatsApp <strong>{createdAppointment?.patient_phone}</strong> & Email.
            </p>

            {/* Ticket Card Details */}
            <div style={{
              backgroundColor: 'var(--color-light-gray)',
              border: '1px dashed var(--color-teal)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              textAlign: 'left',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
              fontSize: '0.875rem'
            }}>
              <div><strong>Kode Tiket:</strong> <span style={{ color: 'var(--color-teal-dark)', fontWeight: 700 }}>{createdAppointment?.id}</span></div>
              <div><strong>Pasien:</strong> {createdAppointment?.patient_name}</div>
              <div><strong>Dokter:</strong> {createdAppointment?.doctor_name}</div>
              <div><strong>Layanan:</strong> {createdAppointment?.service_name}</div>
              <div><strong>Waktu:</strong> {createdAppointment?.appointment_date} pada jam {createdAppointment?.appointment_time} WIB</div>
              <div><strong>Status:</strong> <span style={{ color: 'var(--color-teal-dark)', fontWeight: 600 }}>Terkonfirmasi Otomatis</span></div>
            </div>

            <button
              onClick={resetForm}
              style={{
                backgroundColor: 'var(--color-teal)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 2rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Selesai & Kembali
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
