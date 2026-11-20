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
    'Endoscopy'
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
