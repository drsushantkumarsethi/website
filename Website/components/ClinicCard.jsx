'use client';

import React from 'react';
import Image from 'next/image';
import { formatClinicAddress } from '../utils/dataHelpers';
import { useAppointment } from './AppointmentContext';
import { MapPin, Calendar, Clock, ExternalLink, ShieldCheck, Phone } from 'lucide-react';

export default function ClinicCard({ clinic, onBookAtClinic }) {
  const { openBooking } = useAppointment();
  const fullAddress = formatClinicAddress(clinic);

  const handleBook = () => {
    if (onBookAtClinic) {
      onBookAtClinic(clinic.id);
    } else {
      openBooking(undefined, clinic.id);
    }
  };

  return (
    <div className="clinic-card editorial-card" id={`clinic-${clinic.id}`} style={{ overflow: 'hidden', padding: 0 }}>
      {/* Real Photo Thumbnail */}
      {clinic.image && (
        <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#edf3e6' }}>
          <Image
            src={clinic.image}
            alt={clinic.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: 'rgba(14, 32, 77, 0.88)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}>
            {clinic.id === 'apollo-hospital' ? 'Hospital Consultation Center' : 'Evening Clinic & Diagnostics'}
          </div>
        </div>
      )}

      <div style={{ padding: '24px' }}>
        {/* Clinic Header */}
        <div className="clinic-card-header" style={{ marginBottom: '14px' }}>
          <span className="badge badge-aqua">{clinic.affiliationType}</span>
          <div className="clinic-verified-badge" title="Verified consultation center">
            <ShieldCheck size={14} />
            <span>Verified Center</span>
          </div>
        </div>

        <h3 className="clinic-name" style={{ fontSize: '1.28rem', marginBottom: '16px' }}>{clinic.name}</h3>

        {/* Address */}
        <div className="clinic-detail-item">
          <MapPin size={18} className="clinic-icon" aria-hidden="true" />
          <div>
            <span className="clinic-item-label">Location</span>
            <p className="clinic-address-text">{fullAddress}</p>
          </div>
        </div>

        {/* Days & Hours */}
        <div className="clinic-detail-item">
          <Clock size={18} className="clinic-icon" aria-hidden="true" />
          <div>
            <span className="clinic-item-label">Consultation Schedule</span>
            <p className="clinic-schedule-days"><strong>{clinic.consultationDays}</strong></p>
            <p className="clinic-schedule-time" style={{ color: 'var(--color-teal)', fontWeight: 700 }}>
              {clinic.consultationTimings || clinic.timing}
            </p>
          </div>
        </div>

        {/* Phone Contact */}
        <div className="clinic-detail-item">
          <Phone size={18} className="clinic-icon" aria-hidden="true" />
          <div>
            <span className="clinic-item-label">Direct Coordination Desk</span>
            <p className="clinic-address-text">
              <a href={`tel:${(clinic.phone || '+91 91246 60465').replace(/\s+/g, '')}`} style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                {clinic.phone || '+91 91246 60465'}
              </a>
            </p>
          </div>
        </div>

        {/* Booking Instructions */}
        <div className="clinic-instructions-box" style={{ marginTop: '12px', marginBottom: '20px' }}>
          <span className="instructions-label">Consultation Guidelines:</span>
          <p className="instructions-text">{clinic.bookingInstructions}</p>
        </div>

        {/* Card Actions */}
        <div className="clinic-card-actions">
          {clinic.mapsUrl && (
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`Get Google Maps directions to ${clinic.name} (opens in new tab)`}
            >
              <ExternalLink size={14} />
              <span>Map &amp; Directions</span>
            </a>
          )}

          <button
            type="button"
            onClick={handleBook}
            className="btn btn-primary btn-sm"
          >
            <Calendar size={14} />
            <span>Schedule Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
