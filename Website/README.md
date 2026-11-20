# Dr. Sushant Kumar Sethi - Next.js Medical Practice Website

Official professional, responsive, and patient-centered website for **Dr. Sushant Kumar Sethi**, Senior Consultant Gastroenterologist and Hepatologist in Bhubaneswar, Odisha.

Rebuilt in **Next.js (App Router)** and **React** with an editorial medical design system, strict factual verification, WCAG 2.1 AA accessibility, and full mobile responsiveness.

---

## 🏥 Architecture & Highlights

- **Framework**: Next.js 15+ (App Router) + React 19
- **Design System**: Editorial Medical Aesthetic with Deep Teal (`#0b3b44`), Muted Sage (`#5b7b6d`), Warm White (`#fbf9f5`), Aqua, and Amber accents
- **Typography**: Google Fonts via `next/font/google` (`Playfair Display` serif headers + `Plus Jakarta Sans` clean body)
- **Icons**: Lucide React + custom verified Instagram SVG
- **Data Architecture**: Centralized, strictly verified doctor credentials (`data/doctorData.js`) with an interactive Data Verification Inspector drawer
- **SEO & Metadata**: Complete OpenGraph, Twitter cards, canonical tags, `sitemap.xml`, and `robots.txt`
- **Patient Safety**: Clear emergency red-flags callouts, non-emergency consultation acknowledgments, and clinical disclaimers

---

## 📁 Project Directory Structure

```text
Website/
├── app/
│   ├── about/
│   │   └── page.jsx             # Medical Profile & Credentials
│   ├── services/
│   │   └── page.jsx             # Clinical Specialities & Diagnostic Care
│   ├── locations/
│   │   └── page.jsx             # Clinic Locations & Outpatient Schedules
│   ├── patient-info/
│   │   └── page.jsx             # Consultation Checklists & Procedure Prep
│   ├── contact/
│   │   └── page.jsx             # Consultation Desk & Appointment Booking
│   ├── medical-disclaimer/
│   │   └── page.jsx             # Clinical Disclaimer & Emergency Notice
│   ├── privacy-policy/
│   │   └── page.jsx             # Patient Confidentiality & Privacy Policy
│   ├── layout.jsx               # Root Layout with Font & Meta config
│   ├── page.jsx                 # Homepage with Hero, Stats, FAQs & CTAs
│   ├── not-found.jsx            # Custom 404 page
│   └── globals.css              # Complete design system & stylesheet
├── components/
│   ├── AppointmentContext.jsx   # Global Context for booking modals & drawers
│   ├── AppointmentModal.jsx     # Outpatient Consultation Booking Modal
│   ├── VerificationDrawer.jsx   # Doctor Data Architecture & Audit Inspector
│   ├── ClinicCard.jsx           # Location Cards with Maps & Hours
│   ├── ServiceCard.jsx          # Speciality Cards with symptom tags
│   ├── FaqAccordion.jsx         # Interactive FAQ Accordion with Search & Filter
│   ├── InstagramIcon.jsx        # Verified Instagram SVG Icon
│   ├── SiteHeader.jsx           # Global sticky Navigation Header & Mobile drawer
│   └── SiteFooter.jsx           # Global Editorial Footer with Clinical Reassurance
├── data/
│   └── doctorData.js            # Centralized Doctor Data & Verification Schema
├── utils/
│   └── dataHelpers.js           # Verification filter & formatting helpers
├── public/
│   ├── images/
│   │   ├── dr-sushant-sethi.jpg # High-resolution portrait of Dr. Sethi
│   │   └── clinic-interior.jpg  # Clinical interior photograph
│   ├── favicon.svg              # Practice Favicon
│   ├── icons.svg                # Icon definitions
│   ├── robots.txt               # SEO Crawl Rules
│   └── sitemap.xml              # Search Engine Sitemap
├── next.config.mjs              # Next.js Configuration
└── package.json                 # Dependencies & Build Scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd Website
npm install
```

*(Or from the workspace root: `npm run install:all`)*

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

