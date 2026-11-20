'use client';

import React from 'react';
import { getVerifiedClinics } from '../../utils/dataHelpers';
import ClinicCard from '../../components/ClinicCard';
import { useAppointment, getConsultationMailto } from '../../components/AppointmentContext';
import { Calendar, Compass } from 'lucide-react';

export default function LocationsPage() {
  const clinics = getVerifiedClinics();
  const { openBooking } = useAppointment();

  return (
    <div className="locations-page">
      {/* Header */}
      <section className="locations-header-section">
        <div className="container">
          <div className="locations-header-content">
            <span className="section-eyebrow">Outpatient Consultation Centers</span>
            <h1 className="locations-title">Clinic Locations & Schedules</h1>
            <p className="locations-subtitle">
              Dr. Sushant Kumar Sethi conducts scheduled outpatient consultations at premier clinical centers in Bhubaneswar, Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Main Clinic Cards Grid */}
      <section className="section-padding locations-main-section">
        <div className="container">
          <div className="locations-grid-container">
            {clinics.map((clinic) => (
              <ClinicCard
                key={clinic.id}
                clinic={clinic}
                onBookAtClinic={(id) => openBooking(undefined, id)}
              />
            ))}
          </div>

          {/* General Arrival & Booking Guidelines */}
          <div className="arrival-guide-card editorial-card">
            <div className="arrival-guide-header">
              <Compass size={24} className="arrival-guide-icon" />
              <div>
                <h3 className="arrival-guide-title">Important Guidelines for Outpatient Visitors</h3>
                <p className="arrival-guide-lead">
                  To ensure smooth coordination and minimal waiting time during your clinic visit:
                </p>
              </div>
            </div>

            <div className="arrival-guidelines-grid">
              <div className="guideline-item">
                <span className="guideline-number">01</span>
                <div>
                  <h4 className="guideline-heading">Prior Slot Confirmation</h4>
                  <p className="guideline-text">
                    Outpatient consultation slots are allotted sequentially. Patients with confirmed booking tokens are given priority during clinic hours.
                  </p>
                </div>
              </div>

              <div className="guideline-item">
                <span className="guideline-number">02</span>
                <div>
                  <h4 className="guideline-heading">Medical History Dossier</h4>
                  <p className="guideline-text">
                    Please bring all previous prescriptions, discharge cards, ultrasound reports, and recent blood test records arranged chronologically.
                  </p>
                </div>
              </div>

              <div className="guideline-item">
                <span className="guideline-number">03</span>
                <div>
                  <h4 className="guideline-heading">Fasting for Special Investigations</h4>
                  <p className="guideline-text">
                    If an abdominal ultrasound or endoscopy procedure is planned for the day of visit, 6-8 hours of fasting (no food or drinks) may be required.
                  </p>
                </div>
              </div>

              <div className="guideline-item">
                <span className="guideline-number">04</span>
                <div>
                  <h4 className="guideline-heading">Accompanying Person</h4>
                  <p className="guideline-text">
                    For elderly patients or those undergoing endoscopic sedation, having an adult family member present is strongly recommended.
                  </p>
                </div>
              </div>
            </div>

            <div className="arrival-action-bar">
              <a href={getConsultationMailto('Clinic Location Appointment')} className="btn btn-primary">
                <Calendar size={16} />
                <span>Request Appointment Token</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

