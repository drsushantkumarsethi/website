import './globals.css';
import { Quicksand, Roboto } from 'next/font/google';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { AppointmentProvider } from '../components/AppointmentContext';
import { doctorData } from '../data/doctorData';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://drsushantkumarsethi.com'),
  title: {
    default: `${doctorData.doctor.fullName} | Senior Consultant, Gastroenterology & Hepatology`,
    template: `%s | ${doctorData.doctor.fullName}`
  },
  description: doctorData.doctor.experienceSummary,
  keywords: [
    'Dr Sushant Kumar Sethi',
    'Gastroenterologist Bhubaneswar',
    'Hepatologist Bhubaneswar',
    'Apollo Hospitals Bhubaneswar',
    'Digestive Care',
    'Liver Care',
    'Endoscopy',
    'Colonoscopy',
    'ERCP',
    'EUS'
  ],
  authors: [{ name: doctorData.doctor.fullName }],
  creator: doctorData.doctor.fullName,
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: `${doctorData.doctor.fullName} | Senior Consultant, Gastroenterology & Hepatology`,
    description: doctorData.doctor.experienceSummary,
    url: 'https://drsushantkumarsethi.com',
    siteName: doctorData.doctor.fullName,
    images: [
      {
        url: doctorData.doctor.images.portraitUrl,
        width: 1200,
        height: 630,
        alt: doctorData.doctor.fullName
      }
    ],
    locale: 'en_IN',
    type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://drsushantkumarsethi.com/#physician',
      name: 'Dr. Sushant Kumar Sethi',
      url: 'https://drsushantkumarsethi.com',
      image: 'https://drsushantkumarsethi.com/images/doctor-chair.jpg',
      telephone: '+91 80930 60180',
      email: 'drsushantkumarsethi@gmail.com',
      medicalSpecialty: [
        'https://schema.org/Gastroenterology',
        'Hepatology'
      ],
      jobTitle: 'Senior Consultant Gastroenterologist & Hepatologist',
      description: doctorData.doctor.experienceSummary,
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'All India Institute of Medical Sciences (AIIMS), New Delhi'
        },
        {
          '@type': 'EducationalOrganization',
          name: 'SCB Medical College, Cuttack'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Apollo Hospitals, Sainik School Road, Unit 15',
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        postalCode: '751005',
        addressCountry: 'IN'
      },
      availableService: [
        { '@type': 'MedicalProcedure', name: 'Upper GI Endoscopy' },
        { '@type': 'MedicalProcedure', name: 'Colonoscopy & Polypectomy' },
        { '@type': 'MedicalProcedure', name: 'Endoscopic Ultrasound (EUS)' },
        { '@type': 'MedicalProcedure', name: 'ERCP' },
        { '@type': 'MedicalTherapy', name: 'Fatty Liver Disease (MASLD) Treatment' },
        { '@type': 'MedicalTherapy', name: 'GERD & Acid Reflux Management' }
      ]
    },
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://drsushantkumarsethi.com/#clinic',
      name: 'Dr. Sushant Kumar Sethi - Clinic & Consultation Desk',
      url: 'https://drsushantkumarsethi.com',
      telephone: '+91 80930 60180',
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '17:00'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Apollo Hospitals, Sainik School Road, Unit 15',
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        postalCode: '751005',
        addressCountry: 'IN'
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppointmentProvider>
          <div className="site-wrapper">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>

            <SiteHeader />

            <main id="main-content" tabIndex={-1}>
              {children}
            </main>

            <SiteFooter />
          </div>
        </AppointmentProvider>
      </body>
    </html>
  );
}
