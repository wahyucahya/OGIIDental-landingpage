// Entity Interfaces according to ERD.md

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  education: string;
  experience_years: number;
  photo_url: string;
  description: string;
  rating?: number;
  patientsCount?: number;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  priceEstimate?: string;
  durationMinutes?: number;
}

export type ScheduleStatus = 'Tersedia' | 'Terbatas' | 'Penuh' | 'Tidak Praktik';

export interface Schedule {
  id: string;
  doctor_id: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  status: ScheduleStatus;
  max_patients?: number;
  booked_patients?: number;
}

export interface Appointment {
  id: string;
  doctor_id: string;
  doctor_name?: string;
  service_id?: string;
  service_name?: string;
  patient_name: string;
  patient_phone: string;
  patient_email: string;
  appointment_date: string;
  appointment_time: string;
  notes: string;
  status: 'Menunggu Konfirmasi' | 'Disetujui' | 'Selesai' | 'Dibatalkan';
  created_at: string;
}

export interface Testimonial {
  id: string;
  patient_name: string;
  service_received: string;
  rating: number;
  comment: string;
  avatar_url?: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fasilitas' | 'Ruang Perawatan' | 'Peralatan' | 'Ruang Tunggu';
  image_url: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
