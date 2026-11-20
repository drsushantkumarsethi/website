'use client';

import React from 'react';
import { doctorData } from '../../data/doctorData';
import { getVerifiedFaqs } from '../../utils/dataHelpers';
import FaqAccordion from '../../components/FaqAccordion';
import { useAppointment } from '../../components/AppointmentContext';
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  HelpCircle,
  ShieldAlert,
  Info,
  Clock
} from 'lucide-react';

export default function PatientInfoPage() {
  const verifiedFaqs = getVerifiedFaqs();
  const guides = doctorData.patientGuides;
  const { openBooking } = useAppointment();

  return (
    <div className="patient-info-page">
      {/* Header */}
      <section className="patient-header-section">
        <div className="container">
          <div className="patient-header-content">
            <span className="section-eyebrow">Patient Orientation & Guidance</span>
            <h1 className="patient-title">Patient Resources & Clinical Information</h1>
            <p className="patient-subtitle">
              Comprehensive guidelines to help you prepare for your consultation, understand procedure protocols, and access evidence-based gastrointestinal health information.
            </p>
          </div>
        </div>
      </section>

      {/* Urgent Care & Red Flags Warning Callout */}
      <section className="emergency-warning-section">
        <div className="container">
          <div className="emergency-callout-card">
            <div className="emergency-callout-icon-wrap">
              <ShieldAlert size={28} className="emergency-callout-icon" />
            </div>
            <div className="emergency-callout-body">
              <h3 className="emergency-callout-title">Urgent Care & Acute Emergency Advisory</h3>
              <p className="emergency-callout-text">
                Scheduled outpatient consultations are intended for elective, non-emergency evaluations. If you or a loved one experiences any of the following acute symptoms, seek immediate emergency care at the nearest hospital emergency department:
              </p>
              <div className="emergency-signs-grid">
                <div className="sign-item">
                  <AlertTriangle size={15} />
                  <span>Vomiting blood (hematemesis) or dark brown coffee-ground material</span>
                </div>
                <div className="sign-item">
                  <AlertTriangle size={15} />
                  <span>Black, tarry bowel movements (melena) or heavy rectal bleeding</span>
                </div>
                <div className="sign-item">
                  <AlertTriangle size={15} />
                  <span>Sudden, acute, severe abdominal pain or abdominal rigidity</span>
                </div>
                <div className="sign-item">
                  <AlertTriangle size={15} />
                  <span>Rapidly progressive jaundice accompanied by mental confusion or high fever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Sections */}
      <section className="section-padding patient-guides-section">
        <div className="container">
          {/* Guide 1: First Consultation Checklist */}
          <div className="guide-card editorial-card" id="checklist">
            <div className="guide-card-header">
              <div className="guide-icon-box">
                <FileText size={22} />
              </div>
              <div>
                <span className="badge badge-sage">Essential Preparation</span>
                <h2 className="guide-card-title">{guides.firstVisitChecklist.title}</h2>
                <p className="guide-card-summary">{guides.firstVisitChecklist.summary}</p>
              </div>
            </div>

            <div className="checklist-grid">
              {guides.firstVisitChecklist.checklist.map((item, index) => (
                <div key={index} className="checklist-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="guide-note-box">
              <Info size={16} />
              <span>{guides.firstVisitChecklist.clinicalNote}</span>
            </div>
          </div>

          {/* Guide 2: Upper GI Endoscopy Prep */}
          <div className="guide-card editorial-card" id="endoscopy-prep">
            <div className="guide-card-header">
              <div className="guide-icon-box">
                <Clock size={22} />
              </div>
              <div>
                <span className="badge badge-aqua">Diagnostic Procedure</span>
                <h2 className="guide-card-title">{guides.endoscopyPrepGeneral.title}</h2>
                <p className="guide-card-summary">{guides.endoscopyPrepGeneral.summary}</p>
              </div>
            </div>

            <div className="checklist-grid">
              {guides.endoscopyPrepGeneral.checklist.map((item, index) => (
                <div key={index} className="checklist-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="guide-note-box">
              <Info size={16} />
              <span>{guides.endoscopyPrepGeneral.clinicalNote}</span>
            </div>
          </div>

          {/* Guide 3: Colonoscopy Prep */}
          <div className="guide-card editorial-card" id="colonoscopy-prep">
            <div className="guide-card-header">
              <div className="guide-icon-box">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <span className="badge badge-sage">Screening Procedure</span>
                <h2 className="guide-card-title">{guides.colonoscopyPrepGeneral.title}</h2>
                <p className="guide-card-summary">{guides.colonoscopyPrepGeneral.summary}</p>
              </div>
            </div>

            <div className="checklist-grid">
              {guides.colonoscopyPrepGeneral.checklist.map((item, index) => (
                <div key={index} className="checklist-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="guide-note-box">
              <Info size={16} />
              <span>{guides.colonoscopyPrepGeneral.clinicalNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQs Section */}
      <section className="section-padding faq-full-section">
        <div className="container-narrow">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <HelpCircle size={14} />
              <span>Knowledge Base</span>
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-lead">
              Browse common questions about gastroenterology evaluations, liver disease monitoring, and appointment scheduling.
            </p>
          </div>

          <FaqAccordion faqs={verifiedFaqs} enableFilter={true} />

          <div className="faq-consultation-prompt">
            <h4>Have a specific medical concern or unaddressed symptom?</h4>
            <p>Schedule a personal clinical evaluation with Dr. Sushant Kumar Sethi.</p>
            <button onClick={() => openBooking()} className="btn btn-primary btn-sm">
              <Calendar size={15} />
              <span>Request Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

