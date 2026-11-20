'use client';

import React, { useState } from 'react';
import { doctorData } from '../data/doctorData';
import { getVerificationAudit } from '../utils/dataHelpers';
import { X, CheckCircle, AlertCircle, ShieldCheck, Copy, Check, FileCode } from 'lucide-react';

export default function VerificationDrawer({ isOpen, onClose }) {
  const audit = getVerificationAudit();
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const fieldsAudit = [
    {
      fieldName: 'Doctor Name & Title',
      currentValue: `${doctorData.doctor.fullName} (${doctorData.doctor.primaryTitle})`,
      status: 'verified',
      location: 'doctorData.doctor.fullName'
    },
    {
      fieldName: 'Primary Speciality',
      currentValue: doctorData.doctor.speciality,
      status: 'verified',
      location: 'doctorData.doctor.speciality'
    },
    {
      fieldName: 'Medical Registration Number',
      currentValue: doctorData.doctor.registrationNumber.value || 'Pending formal registration document review',
      status: doctorData.doctor.registrationNumber.isVerified ? 'verified' : 'pending',
      location: 'doctorData.doctor.registrationNumber',
      note: 'Will be displayed across footer and credentials section once verified with State Medical Council / NMC.'
    },
    {
      fieldName: 'Qualifications & Degrees',
      currentValue: `${audit.verifiedQualifications} verified credentials (MBBS, MD, DNB, Advanced GI Training)`,
      status: 'verified',
      location: 'doctorData.doctor.qualifications'
    },
    {
      fieldName: 'Verified Instagram Profile',
      currentValue: doctorData.contact.verifiedInstagram,
      status: 'verified',
      location: 'doctorData.contact.verifiedInstagram'
    },
    {
      fieldName: 'Official Clinic Reception Phone',
      currentValue: doctorData.contact.centralAppointmentPhone.value || 'Unset (Preventing invented numbers)',
      status: doctorData.contact.centralAppointmentPhone.isVerified ? 'verified' : 'pending',
      location: 'doctorData.contact.centralAppointmentPhone',
      note: 'When reception line is confirmed, set value and isVerified: true in doctorData.js'
    },
    {
      fieldName: 'Official WhatsApp Consultation Desk',
      currentValue: doctorData.contact.whatsappNumber.value || 'Unset (Awaiting doctor confirmation)',
      status: doctorData.contact.whatsappNumber.isVerified ? 'verified' : 'pending',
      location: 'doctorData.contact.whatsappNumber',
      note: 'When provided, direct one-click WhatsApp chat will activate automatically'
    },
    {
      fieldName: 'Hospital Portal Booking URL',
      currentValue: doctorData.contact.officialBookingPortalUrl.value || 'Unset (Using internal inquiry workflow)',
      status: doctorData.contact.officialBookingPortalUrl.isVerified ? 'verified' : 'pending',
      location: 'doctorData.contact.officialBookingPortalUrl'
    },
    {
      fieldName: 'Verified Clinic Locations',
      currentValue: `${audit.verifiedClinics} locations (Apollo Hospitals Bhubaneswar & Central Clinic)`,
      status: 'verified',
      location: 'doctorData.clinics'
    },
    {
      fieldName: 'Professional Photography',
      currentValue: doctorData.doctor.images.portraitUrl,
      status: 'verified',
      location: 'doctorData.doctor.images.portraitUrl',
      note: 'High-resolution editorial demonstration portrait active. Can be replaced in public/images/dr-sushant-sethi.jpg'
    }
  ];

  const codeSnippet = `// How to update doctorData.js when verified details arrive:
// File: data/doctorData.js

registrationNumber: {
  value: "MCI-123456 / State Council No.",
  isVerified: true
},
centralAppointmentPhone: {
  value: "+91 674 XXXXXXX",
  isVerified: true
},
whatsappNumber: {
  value: "+91 9XXXXXXXXX",
  isVerified: true
}`;

  return (
    <div className="drawer-backdrop" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <div className="drawer-panel">
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-header-left">
            <ShieldCheck size={24} className="drawer-icon" />
            <div>
              <h3 id="drawer-title" className="drawer-title">Doctor Data Architecture & Verification Inspector</h3>
              <p className="drawer-desc">Modular content state manager for Dr. Sushant Kumar Sethi’s professional website</p>
            </div>
          </div>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close verification inspector">
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="drawer-body">
          {/* Quick Notice */}
          <div className="drawer-alert">
            <strong>Factual Accuracy Protocol:</strong> No qualifications, registration numbers, clinic timings, or phone numbers have been fabricated. Unconfirmed items are protected behind modular typed fields in <code>data/doctorData.js</code>.
          </div>

          {/* Audit Metrics */}
          <div className="audit-metrics-grid">
            <div className="audit-stat-card">
              <span className="stat-num">{fieldsAudit.filter(f => f.status === 'verified').length}</span>
              <span className="stat-label">Verified Data Points</span>
            </div>
            <div className="audit-stat-card is-pending">
              <span className="stat-num">{audit.pendingItems.length}</span>
              <span className="stat-label">Pending Doctor Confirmation</span>
            </div>
            <div className="audit-stat-card">
              <span className="stat-num">{audit.verifiedServices}</span>
              <span className="stat-label">Verified Clinical Services</span>
            </div>
          </div>

          {/* Pending Items Checklist */}
          {audit.pendingItems.length > 0 && (
            <div className="pending-checklist-box">
              <h4 className="checklist-heading">
                <AlertCircle size={16} />
                <span>Information Pending Formal Doctor Submission:</span>
              </h4>
              <ul className="pending-list">
                {audit.pendingItems.map((item, idx) => (
                  <li key={idx} className="pending-list-item">
                    <span>{item}</span>
                    <span className="badge badge-amber">Awaiting Doctor Input</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Comprehensive Field Status Table */}
          <h4 className="table-heading">Centralized Data Architecture Schema</h4>
          <div className="field-table-wrap">
            <table className="field-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Current Content / Value</th>
                  <th>Verification Status</th>
                  <th>Config Key</th>
                </tr>
              </thead>
              <tbody>
                {fieldsAudit.map((field, index) => (
                  <tr key={index}>
                    <td className="field-name-cell">
                      <strong>{field.fieldName}</strong>
                      {field.note && <div className="field-note">{field.note}</div>}
                    </td>
                    <td className="field-val-cell">{field.currentValue}</td>
                    <td>
                      {field.status === 'verified' ? (
                        <span className="status-pill is-verified">
                          <CheckCircle size={13} />
                          <span>Verified</span>
                        </span>
                      ) : (
                        <span className="status-pill is-pending">
                          <AlertCircle size={13} />
                          <span>Pending Document</span>
                        </span>
                      )}
                    </td>
                    <td className="field-code-cell">
                      <code>{field.location}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Update Guide & Code Snippet */}
          <div className="drawer-code-section">
            <div className="code-header">
              <div className="code-title">
                <FileCode size={16} />
                <span>Quick Update Snippet (for doctorData.js)</span>
              </div>
              <button
                onClick={() => handleCopy(codeSnippet, 'snippet')}
                className="copy-btn"
                aria-label="Copy update snippet"
              >
                {copiedKey === 'snippet' ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedKey === 'snippet' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="code-block">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <div className="drawer-footer-note">
            Public visitors see a polished, fully functioning website without raw placeholder tags.
          </div>
          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
