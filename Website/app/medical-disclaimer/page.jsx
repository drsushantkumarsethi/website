'use client';

import React from 'react';
import { doctorData } from '../../data/doctorData';
import { useAppointment } from '../../components/AppointmentContext';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function MedicalDisclaimerPage() {
  const { openBooking } = useAppointment();

  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="container">
          <span className="section-eyebrow">Professional Clinical Notice</span>
          <h1 className="legal-title">Medical Disclaimer</h1>
          <p className="legal-lead">
            Important terms and conditions governing medical information presented on the official website of {doctorData.doctor.fullName}.
          </p>
        </div>
      </section>

      <section className="section-padding legal-body-section">
        <div className="container-narrow">
          <div className="legal-card editorial-card">
            <div className="legal-alert-box">
              <ShieldAlert size={22} className="legal-alert-icon" />
              <div>
                <strong>Emergency Warning:</strong> This website and its inquiry forms are not designed or staffed for acute medical emergencies. If you are experiencing sudden severe chest pain, heavy GI bleeding, severe vomiting, or acute distress, call emergency services or go to the nearest emergency room immediately.
              </div>
            </div>

            <div className="legal-section-block">
              <h2>1. General Educational Information Only</h2>
              <p>
                All medical, clinical, dietary, and healthcare-related content published on this website—including articles, FAQs, checklists, and symptom descriptions—is provided solely for patient literacy, education, and general awareness.
              </p>
              <p>
                Nothing on this site should be construed as formal medical advice, diagnostic determination, or a treatment recommendation for your personal health condition.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. No Doctor-Patient Relationship Created</h2>
              <p>
                Browsing this website, submitting an appointment request, or receiving general informational email communications does NOT establish a doctor-patient relationship with {doctorData.doctor.fullName}.
              </p>
              <p>
                A formal clinical relationship is established exclusively upon direct, in-person outpatient or inpatient clinical evaluation, comprehensive history taking, physical examination, and diagnostic documentation at an authorized hospital or clinic center.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Diagnostic Accuracy and Individual Variability</h2>
              <p>
                Gastroenterology and Hepatology symptoms—such as dyspepsia, abdominal discomfort, jaundice, changes in bowel habits, or reflux—can stem from diverse clinical etiologies requiring distinct diagnostic workups. Never delay seeking professional medical care, ignore professional advice, or discontinue existing medications based on online information.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Procedure Preparation and Protocol Guidance</h2>
              <p>
                General preparation summaries for endoscopy, colonoscopy, and abdominal imaging provided on this site are generic informational overviews. Patients scheduled for procedures must strictly adhere to the individual, written, doctor-approved instructions provided directly to them by Dr. Sethi's clinical team.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. External References and Third-Party Links</h2>
              <p>
                Links to hospital websites, medical councils, mapping directions, or verified social profiles (such as Instagram) are provided for patient convenience. While we strive to maintain accurate information, we do not control third-party platforms.
              </p>
            </div>

            <div className="legal-cta-box">
              <h3>Have Questions About Your Digestive Health?</h3>
              <p>Schedule an in-person consultation for personalized diagnostic assessment.</p>
              <button onClick={() => openBooking()} className="btn btn-primary btn-sm">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

