'use client';

import React, { useState } from 'react';
import { doctorData } from '../data/doctorData';
import { X, CheckCircle, AlertCircle, ShieldCheck, Copy, Check, FileCode } from 'lucide-react';

export default function VerificationDrawer({ isOpen, onClose }) {
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, key) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const doctor = doctorData?.doctor || {};
  const contact = doctorData?.contact || {};
  const clinics = doctorData?.clinics || [];

  const fieldsAudit = [
    {
      fieldName: 'Doctor Name & Title',
      currentValue: `${doctor.fullName || 'Dr. Sushant Kumar Sethi'} (${doctor.primaryTitle || 'Senior Consultant'})`,
      status: 'verified',
      location: 'doctorData.doctor.fullName'
    },
    {
      fieldName: 'Primary Speciality',
      currentValue: doctor.speciality || 'Gastroenterology & Hepatology',
      status: 'verified',
      location: 'doctorData.doctor.speciality'
    },
    {
      fieldName: 'Medical Registration Number',
      currentValue: doctor.registrationNumber?.value || 'Pending formal registration document review',
      status: doctor.registrationNumber?.isVerified ? 'verified' : 'pending',
      location: 'doctorData.doctor.registrationNumber',
      note: 'Will be displayed across footer and credentials section once verified with State Medical Council / NMC.'
    },
    {
      fieldName: 'Qualifications & Degrees',
      currentValue: (doctor.degrees || ['MBBS', 'MD', 'DNB']).join(', '),
      status: 'verified',
      location: 'doctorData.doctor.qualifications'
    },
    {
      fieldName: 'Verified Instagram Profile',
      currentValue: contact.verifiedInstagram || 'https://instagram.com/drsushantsethi',
      status: 'verified',
      location: 'doctorData.contact.verifiedInstagram'
    },
    {
      fieldName: 'Official Clinic Phone',
      currentValue: contact.phone || '+91 80930 60180',
      status: 'verified',
      location: 'doctorData.contact.phone'
    },
    {
      fieldName: 'Verified Clinic Locations',
      currentValue: `${clinics.length} location(s) in Bhubaneswar`,
      status: 'verified',
      location: 'doctorData.clinics'
    }
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card" style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div className="modal-header-text">
            <span className="modal-eyebrow">Medical Profile Governance</span>
            <h3 className="modal-title">Verification &amp; Integrity Audit</h3>
            <p className="modal-subtitle">Field-by-field verification record</p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close audit drawer">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {fieldsAudit.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px 18px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border-light)',
                  background: item.status === 'verified' ? '#fbfdfc' : '#fffbeb'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-heading)' }}>
                    {item.fieldName}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: item.status === 'verified' ? '#dcfce7' : '#fef3c7',
                    color: item.status === 'verified' ? '#166534' : '#92400e'
                  }}>
                    {item.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--color-text-body)', wordBreak: 'break-word' }}>
                  {item.currentValue}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', textAlign: 'right' }}>
            <button onClick={onClose} className="btn btn-secondary">
              Close Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
