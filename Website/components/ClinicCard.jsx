'use client';

import React from 'react';
import { formatClinicAddress } from '../utils/dataHelpers';
import { useAppointment } from './AppointmentContext';
import { MapPin, Calendar, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

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
    <div className="clinic-card editorial-card" id={`clinic-${clinic.id}`}>
      {/* Clinic Header */}
      <div className="clinic-card-header">
        <span className="badge badge-aqua">{clinic.affiliationType}</span>
        <div className="clinic-verified-badge" title="Verified consultation center">
          <ShieldCheck size={14} />
          <span>Verified Center</span>
        </div>
      </div>

      <h3 className="clinic-name">{clinic.name}</h3>

      {/* Address */}
      <div className="clinic-detail-item">
        <MapPin size={18} className="clinic-icon" aria-hidden="true" />
        <div>
          <span className="clinic-item-label">Address</span>
          <p className="clinic-address-text">{fullAddress}</p>
        </div>
      </div>

      {/* Days & Hours */}
      <div className="clinic-detail-item">
        <Clock size={18} className="clinic-icon" aria-hidden="true" />
        <div>
          <span className="clinic-item-label">Consultation Schedule</span>
          <p className="clinic-schedule-days"><strong>{clinic.consultationDays}</strong></p>
          <p className="clinic-schedule-time">{clinic.consultationTimings}</p>
        </div>
      </div>

      {/* Booking Instructions */}
      <div className="clinic-instructions-box">
        <span className="instructions-label">Appointment Guidelines:</span>
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
            <span>Map & Directions</span>
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
  );
}
