import React from 'react';
import { doctorData } from '../../data/doctorData';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Patient Confidentiality',
  description: `Privacy policy and patient confidentiality standards for the clinical practice of ${doctorData.doctor.fullName}.`
};

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="container">
          <span className="section-eyebrow">Data Protection & Ethics</span>
          <h1 className="legal-title">Privacy Policy & Patient Confidentiality</h1>
          <p className="legal-lead">
            How patient information is protected and handled in compliance with medical confidentiality standards.
          </p>
        </div>
      </section>

      <section className="section-padding legal-body-section">
        <div className="container-narrow">
          <div className="legal-card editorial-card">
            <div className="privacy-badge-strip">
              <ShieldCheck size={20} className="privacy-badge-icon" />
              <span>Patient confidentiality is a core ethical commitment of {doctorData.doctor.fullName}'s clinical practice.</span>
            </div>

            <div className="legal-section-block">
              <h2>1. Information We Collect</h2>
              <p>
                When you submit an appointment inquiry through our website, we may collect minimal necessary information including:
              </p>
              <ul>
                <li>Your full name and contact telephone number.</li>
                <li>Your email address (if provided).</li>
                <li>Preferred clinic location and clinical reason for consultation.</li>
                <li>Voluntary notes regarding symptom duration or prior investigations.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>2. Purpose and Utilization of Information</h2>
              <p>
                The information you provide is utilized strictly for:
              </p>
              <ul>
                <li>Coordinating, scheduling, and confirming your clinical outpatient appointment.</li>
                <li>Answering administrative queries regarding clinic location and consultation timings.</li>
                <li>Assisting our outpatient desk in assigning appropriate consultation slots.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>3. Strict Non-Disclosure and Confidentiality</h2>
              <p>
                We do not sell, rent, commercialize, or share your personal or medical inquiry data with marketing agencies, pharmaceutical representatives, or unauthorized third parties. Information is accessed exclusively by authorized clinical and appointment coordination personnel.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Digital Security and Storage</h2>
              <p>
                We employ standard administrative and technical safeguards to protect information submitted through our forms. However, please be advised that standard internet transmissions are not infallible; we encourage patients not to transmit sensitive financial records or unnecessary personal credentials via public web forms.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Contact Regarding Privacy Inquiries</h2>
              <p>
                If you have questions regarding our privacy practices or wish to update or withdraw contact information submitted via this site, please reach out directly through our verified clinic coordination desk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

