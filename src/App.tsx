import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SchedulesSection } from './components/SchedulesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { GalleryTestimonialsFaq } from './components/GalleryTestimonialsFaq';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LoadingScreen } from './components/LoadingScreen';
import type { Doctor, Service, Schedule, Appointment } from './types';

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenBooking = () => {
    setSelectedDoctor(null);
    setSelectedService(null);
    setSelectedSchedule(null);
    setIsBookingOpen(true);
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setSelectedService(null);
    setSelectedSchedule(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setSelectedDoctor(null);
    setSelectedSchedule(null);
    setIsBookingOpen(true);
  };

  const handleSelectDoctorSchedule = (doctor: Doctor, schedule: Schedule) => {
    setSelectedDoctor(doctor);
    setSelectedSchedule(schedule);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (newAppointment: Appointment) => {
    setAppointments((prev) => [newAppointment, ...prev]);
    console.log('Total booked appointments:', appointments.length + 1);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-light-gray)' }}>
      {/* Fullscreen Initial Loading Screen */}
      {isLoading && <LoadingScreen />}

      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={handleOpenBooking} />
        <ServicesSection onSelectService={handleSelectService} />
        <SchedulesSection onSelectDoctorSchedule={handleSelectDoctorSchedule} />
        <DoctorsSection onSelectDoctor={handleSelectDoctor} />
        <GalleryTestimonialsFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDoctor={selectedDoctor}
        initialService={selectedService}
        initialSchedule={selectedSchedule}
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
}

export default App;
