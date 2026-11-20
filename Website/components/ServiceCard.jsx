'use client';

import React, { useState } from 'react';
import { useAppointment } from './AppointmentContext';
import { Stethoscope, CheckCircle2, ChevronRight, Calendar, Info } from 'lucide-react';

export default function ServiceCard({ service, onBook }) {
  const [expanded, setExpanded] = useState(false);
  const { openBooking } = useAppointment();

  const handleBook = () => {
    if (onBook) {
      onBook(service.title);
    } else {
      openBooking(service.title);
    }
  };

  return (
    <article className="service-card editorial-card" id={`service-${service.id}`}>
      {/* Category & Badge */}
      <div className="service-card-top">
        <span className="badge badge-sage">{service.category || 'Gastroenterology'}</span>
        <div className="service-icon-wrap" aria-hidden="true">
          <Stethoscope size={18} />
        </div>
      </div>

      {/* Title & Short Summary */}
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-summary">{service.shortSummary || service.lead || service.description || ''}</p>

      {/* Common Symptoms List */}
      {(service.commonSymptoms && service.commonSymptoms.length > 0) ? (
        <div className="service-symptoms-section">
          <span className="symptoms-label">Common Symptoms & Indications:</span>
          <ul className="symptoms-list">
            {service.commonSymptoms.slice(0, 3).map((symptom, idx) => (
              <li key={idx} className="symptom-item">
                <CheckCircle2 size={14} className="symptom-check" aria-hidden="true" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Expandable Clinical Details */}
      {expanded && (
        <div className="service-card-details">
          <div className="detail-block">
            <span className="detail-heading">Clinical Evaluation & Approach:</span>
            <p className="detail-text">{service.clinicalApproach}</p>
          </div>

          {service.preparationAdvice && (
            <div className="detail-block prep-block">
              <div className="prep-header">
                <Info size={15} />
                <span className="detail-heading">Preparation & Clinical Note:</span>
              </div>
              <p className="detail-text">{service.preparationAdvice}</p>
            </div>
          )}
        </div>
      )}

      {/* Card Actions */}
      <div className="service-card-actions">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="service-details-toggle"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Hide clinical approach' : 'View clinical approach'}</span>
          <ChevronRight size={15} className={`chevron-icon ${expanded ? 'rotated' : ''}`} />
        </button>

        <button
          type="button"
          onClick={handleBook}
          className="btn btn-secondary btn-sm"
        >
          <Calendar size={14} />
          <span>Consult</span>
        </button>
      </div>
    </article>
  );
}
