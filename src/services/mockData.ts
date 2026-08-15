import type { Doctor, Service, Schedule, GalleryItem, Testimonial, FAQItem, Appointment } from '../types';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-1',
    name: 'drg. Ogi Prayoga, Sp.KG',
    specialization: 'Spesialis Konservasi Gigi & Estetika',
    education: 'Spesialis Konservasi Gigi Universitas Indonesia (UI)',
    experience_years: 12,
    photo_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    description: 'Fokus pada perawatan saluran akar, perbaikan penampakan estetika senyum (Smile Design), veneer, dan pemutihan gigi dengan teknologi mikro-presisi.',
    rating: 4.9,
    patientsCount: 3400
  },
  {
    id: 'doc-2',
    name: 'drg. Anisa Rahma, Sp.Ort',
    specialization: 'Spesialis Ortodonti (Behel & Invisalign)',
    education: 'Spesialis Ortodonti Universitas Gadjah Mada (UGM)',
    experience_years: 9,
    photo_url: 'https://images.unsplash.com/photo-1594824813566-7885a3964478?auto=format&fit=crop&w=600&q=80',
    description: 'Ahli dalam perataan struktur gigi menggunakan behel konvensional, behel self-ligating, serta Aligner Transparan (Invisalign) modern.',
    rating: 4.9,
    patientsCount: 2850
  },
  {
    id: 'doc-3',
    name: 'drg. Budi Santoso, Sp.BMM',
    specialization: 'Spesialis Bedah Mulut & Implan Gigi',
    education: 'Spesialis Bedah Mulut Universitas Airlangga (UNAIR)',
    experience_years: 15,
    photo_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    description: 'Berpengalaman menangani operasi gigi bungsu impaksi yang kompleks, penanaman implan gigi permanen, dan rekonstruksi rahang.',
    rating: 5.0,
    patientsCount: 4100
  },
  {
    id: 'doc-4',
    name: 'drg. Siska Putri, Sp.KGA',
    specialization: 'Spesialis Kedokteran Gigi Anak',
    education: 'Spesialis Kedokteran Gigi Anak Universitas Padjadjaran (UNPAD)',
    experience_years: 8,
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    description: 'Pendekatan ramah anak, bebas rasa takut, penanganan karies gigi anak, pencegahan fluoridasi, dan perawatan kesehatan mulut sejak dini.',
    rating: 4.8,
    patientsCount: 1900
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-1',
    name: 'Pembersihan Karang Gigi (Scaling)',
    icon: 'IconSparkles',
    description: 'Pembersihan plak dan kalkulus gigi secara menyeluruh menggunakan teknologi Ultrasonic Scaler tanpa merusak email gigi.',
    category: 'Pencegahan',
    priceEstimate: 'Rp 250.000 - Rp 450.000',
    durationMinutes: 45
  },
  {
    id: 'srv-2',
    name: 'Pemutihan Gigi (Teeth Whitening)',
    icon: 'IconSun',
    description: 'Perawatan estetik mencerahkan warna gigi hingga 8 tingkat lebih putih dalam 1 sesi dengan sinar LED Cold-Light aman.',
    category: 'Estetika',
    priceEstimate: 'Rp 1.800.000 - Rp 2.500.000',
    durationMinutes: 60
  },
  {
    id: 'srv-3',
    name: 'Pemasangan Behel Gigi (Orthodontic)',
    icon: 'IconBrandGridper',
    description: 'Pilihan behel Metal, Ceramic, Sapphire, hingga Invisalign transparan untuk merapikan senyum impian Anda.',
    category: 'Ortodonti',
    priceEstimate: 'Mulai dari Rp 4.500.000',
    durationMinutes: 90
  },
  {
    id: 'srv-4',
    name: 'Implan Gigi Permanen',
    icon: 'IconBuildingBridge',
    description: 'Solusi penggantian gigi ompong paling alami dan permanen yang ditanam langsung pada tulang rahang.',
    category: 'Bedah Mulut',
    priceEstimate: 'Mulai dari Rp 12.000.000',
    durationMinutes: 120
  },
  {
    id: 'srv-5',
    name: 'Perawatan Saluran Akar (Endodontik)',
    icon: 'IconStethoscope',
    description: 'Menyelamatkan gigi berlubang parah atau terinfeksi agar tidak perlu dicabut melalui sterilisasi jaringan syaraf gigi.',
    category: 'Konservasi',
    priceEstimate: 'Rp 600.000 - Rp 1.200.000',
    durationMinutes: 60
  },
  {
    id: 'srv-6',
    name: 'Operasi Gigi Bungsu (Odontektomi)',
    icon: 'IconTooth',
    description: 'Prosedur pembedahan ringan untuk mengeluarkan gigi geraham belakang miring yang menimbulkan rasa nyeri.',
    category: 'Bedah Mulut',
    priceEstimate: 'Rp 1.500.000 - Rp 3.000.000',
    durationMinutes: 60
  }
];

export const SCHEDULES_DATA: Schedule[] = [
  { id: 'sch-1', doctor_id: 'doc-1', day_of_week: 'Senin', start_time: '09:00', end_time: '14:00', status: 'Tersedia', max_patients: 10, booked_patients: 4 },
  { id: 'sch-2', doctor_id: 'doc-1', day_of_week: 'Rabu', start_time: '15:00', end_time: '20:00', status: 'Terbatas', max_patients: 10, booked_patients: 8 },
  { id: 'sch-3', doctor_id: 'doc-1', day_of_week: 'Jumat', start_time: '09:00', end_time: '14:00', status: 'Tersedia', max_patients: 10, booked_patients: 2 },

  { id: 'sch-4', doctor_id: 'doc-2', day_of_week: 'Selasa', start_time: '10:00', end_time: '16:00', status: 'Tersedia', max_patients: 12, booked_patients: 5 },
  { id: 'sch-5', doctor_id: 'doc-2', day_of_week: 'Kamis', start_time: '13:00', end_time: '19:00', status: 'Penuh', max_patients: 12, booked_patients: 12 },
  { id: 'sch-6', doctor_id: 'doc-2', day_of_week: 'Sabtu', start_time: '09:00', end_time: '15:00', status: 'Terbatas', max_patients: 10, booked_patients: 9 },

  { id: 'sch-7', doctor_id: 'doc-3', day_of_week: 'Senin', start_time: '16:00', end_time: '21:00', status: 'Tersedia', max_patients: 8, booked_patients: 3 },
  { id: 'sch-8', doctor_id: 'doc-3', day_of_week: 'Rabu', start_time: '10:00', end_time: '15:00', status: 'Tersedia', max_patients: 8, booked_patients: 1 },
  { id: 'sch-9', doctor_id: 'doc-3', day_of_week: 'Sabtu', start_time: '13:00', end_time: '18:00', status: 'Tidak Praktik', max_patients: 0, booked_patients: 0 },

  { id: 'sch-10', doctor_id: 'doc-4', day_of_week: 'Selasa', start_time: '14:00', end_time: '18:00', status: 'Tersedia', max_patients: 8, booked_patients: 2 },
  { id: 'sch-11', doctor_id: 'doc-4', day_of_week: 'Jumat', start_time: '14:00', end_time: '19:00', status: 'Terbatas', max_patients: 8, booked_patients: 7 },
  { id: 'sch-12', doctor_id: 'doc-4', day_of_week: 'Minggu', start_time: '10:00', end_time: '15:00', status: 'Tersedia', max_patients: 10, booked_patients: 4 }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ruang Perawatan Utama Modern',
    category: 'Ruang Perawatan',
    image_url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    description: 'Dilengkapi dengan kursi dental ergonomic mutakhir dan layar monitor HD untuk penjelasan prosedur pasien.'
  },
  {
    id: 'gal-2',
    title: 'Lobby & Ruang Tunggu Nyaman',
    category: 'Ruang Tunggu',
    image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'Suasana lounge bersih, nyaman, ber-AC dilengkapi Wi-Fi cepat dan pilihan minuman gratis.'
  },
  {
    id: 'gal-3',
    title: 'Peralatan Sterilisasi Standar Medis',
    category: 'Peralatan',
    image_url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    description: 'Mesin autoklaf kelas dunia menjamin seluruh instrumen medis 100% steril dan higienis.'
  },
  {
    id: 'gal-4',
    title: 'Teknologi Rontgen Panoramik 3D',
    category: 'Peralatan',
    image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Pemindaian radiologi digital dosis radiasi rendah untuk diagnosa masalah tulang rahang yang sangat akurat.'
  },
  {
    id: 'gal-5',
    title: 'Ruang Ramah Anak (Kids Zone)',
    category: 'Fasilitas',
    image_url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    description: 'Area khusus anak-anak dengan dekorasi menyenangkan agar Si Kecil merasa tenang sebelum tindakan.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    patient_name: 'Dini Lestari',
    service_received: 'Pemutihan Gigi (Teeth Whitening)',
    rating: 5,
    comment: 'Hasilnya luar biasa memuaskan! Gigi saya jadi cerah alami dalam satu kali datang tanpa rasa ngilu sama sekali. Dokter Ogi sangat teliti menjelaskan langkah-langkahnya.',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: '10 Juli 2026'
  },
  {
    id: 'test-2',
    patient_name: 'Rian Hidayat',
    service_received: 'Pemasangan Invisalign',
    rating: 5,
    comment: 'Pemasangan Invisalign di drg. Anisa sangat fleksibel untuk jadwal kerja saya yang padat. Pelayanannya sangat profesional dan ramah.',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '28 Juni 2026'
  },
  {
    id: 'test-3',
    patient_name: 'Siti Rahmawati',
    service_received: 'Perawatan Gigi Anak',
    rating: 5,
    comment: 'Anak saya yang tadinya sangat takut ke dokter gigi jadi senang sekali dirawat drg. Siska. Ruangannya nyaman dan dokternya sabar sekali!',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: '15 Mei 2026'
  },
  {
    id: 'test-4',
    patient_name: 'Hendrik Wijaya',
    service_received: 'Implan Gigi Permanen',
    rating: 5,
    comment: 'Implan gigi drg. Budi sangat presisi. Prosesnya nyaman, pemulihan cepat, dan sekarang saya bisa makan dengan percaya diri seperti gigi asli.',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: '02 Agustus 2026'
  },
  {
    id: 'test-5',
    patient_name: 'Clara Amanda',
    service_received: 'Pembersihan Karang Gigi (Scaling)',
    rating: 5,
    comment: 'Tempatnya sangat bersih dan wangi. Scaling-nya super lembut, tidak sakit sama sekali. Pasti akan langganan rutin ke OGII DENTAL!',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '12 Agustus 2026'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana cara melakukan booking janji temu di OGII DENTAL?',
    answer: 'Anda dapat memilih dokter dan jadwal yang tersedia langsung melalui formulir booking online di website ini, atau menghubungi kami via WhatsApp resmi klinik.',
    category: 'Booking'
  },
  {
    id: 'faq-2',
    question: 'Apakah OGII DENTAL menerima asuransi kesehatan?',
    answer: 'Ya, kami bekerja sama dengan berbagai mitra asuransi kesehatan terkemuka serta metode pembayaran tunai, kartu debit/kredit, dan QRIS.',
    category: 'Pembayaran'
  },
  {
    id: 'faq-3',
    question: 'Berapa lama waktu yang dibutuhkan untuk proses Pembersihan Karang Gigi (Scaling)?',
    answer: 'Prosedur scaling umumnya membutuhkan waktu antara 30 hingga 45 menit tergantung pada kondisi penumpukan karang gigi pasien.',
    category: 'Layanan'
  },
  {
    id: 'faq-4',
    question: 'Apakah prosedur pemutihan gigi menimbulkan efek samping rasa ngilu?',
    answer: 'Di OGII DENTAL kami menggunakan gel desensitisasi modern yang meminimalkan rasa ngilu sehingga nyaman bagi sebagian besar pasien.',
    category: 'Layanan'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana jika saya perlu mengubah atau membatalkan jadwal janji temu?',
    answer: 'Anda dapat menghubungi tim customer service kami paling lambat 3 jam sebelum jadwal konsultasi untuk melakukan rescheduling tanpa biaya.',
    category: 'Booking'
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'app-1',
    doctor_id: 'doc-1',
    doctor_name: 'drg. Ogi Prayoga, Sp.KG',
    service_id: 'srv-2',
    service_name: 'Pemutihan Gigi (Teeth Whitening)',
    patient_name: 'Ahmad Fauzi',
    patient_phone: '081234567890',
    patient_email: 'ahmad.fauzi@example.com',
    appointment_date: '2026-08-18',
    appointment_time: '10:00',
    notes: 'Ingin konsultasi pemutihan gigi sebelum acara pernikahan',
    status: 'Disetujui',
    created_at: '2026-08-14 10:30'
  }
];
