import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "OGII DENTAL | Klinik Gigi & Dokter Spesialis di Jakarta",
  description = "Klinik gigi modern OGII DENTAL Jakarta menyediakan perawatan gigi profesional, scaling, tambal gigi, behel, implan, jadwal praktik dokter real-time, dan booking janji temu online.",
  keywords = "dokter gigi Jakarta, klinik gigi Jakarta, dokter gigi terdekat, scaling gigi Jakarta, behel gigi Jakarta, tambal gigi Jakarta, implan gigi Jakarta, janji temu dokter gigi",
  canonicalUrl = "https://ogii-dental.com/",
  ogImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
}) => {
  // 1. LocalBusiness / Dentist Structured Data (JSON-LD)
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "OGII DENTAL",
    "image": ogImage,
    "@id": "https://ogii-dental.com/#organization",
    "url": "https://ogii-dental.com/",
    "telephone": "+6281234567890",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kesehatan Raya No. 45, Kebayoran Baru",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12110",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2274,
      "longitude": 106.8012
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com"
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Orthodontics",
      "Endodontics",
      "PediatricDentistry"
    ]
  };

  // 2. Doctor / Staff Structured Data
  const medicalStaffSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "OGII DENTAL Specialists",
    "employee": [
      {
        "@type": "Physician",
        "name": "drg. Ogi Prayoga, Sp.KG",
        "medicalSpecialty": "Endodontics",
        "description": "Spesialis Konservasi Gigi & Estetika (Perawatan Saluran Akar, Veneer, Pemutihan Gigi)"
      },
      {
        "@type": "Physician",
        "name": "drg. Anisa Rahma, Sp.Ort",
        "medicalSpecialty": "Orthodontics",
        "description": "Spesialis Ortodonti (Behel & Invisalign Transparan)"
      },
      {
        "@type": "Physician",
        "name": "drg. Budi Santoso, Sp.BMM",
        "medicalSpecialty": "Dentistry",
        "description": "Spesialis Bedah Mulut & Implan Gigi Permanen"
      },
      {
        "@type": "Physician",
        "name": "drg. Siska Putri, Sp.KGA",
        "medicalSpecialty": "PediatricDentistry",
        "description": "Spesialis Kedokteran Gigi Anak"
      }
    ]
  };

  return (
    <React.Fragment>
      {/* Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="OGII DENTAL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalStaffSchema) }}
      />
    </React.Fragment>
  );
};
