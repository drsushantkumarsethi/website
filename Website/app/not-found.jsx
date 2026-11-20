'use client';

import React from 'react';
import Link from 'next/link';
import { doctorData } from '../data/doctorData';
import { useAppointment, getConsultationMailto } from '../components/AppointmentContext';
import { Home, Calendar } from 'lucide-react';

export default function NotFound() {
  const { openBooking } = useAppointment();

  return (
    <div className="not-found-page">
      <div className="container-narrow text-center">
        <div className="not-found-card editorial-card">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for does not exist or may have been relocated. Please use the navigation links below to return to the official clinical practice of {doctorData.doctor.fullName}.
          </p>

          <div className="not-found-actions">
            <Link href="/" className="btn btn-primary">
              <Home size={16} />
              <span>Return to Homepage</span>
            </Link>
            <Link href="/services" className="btn btn-secondary">
              <span>View Clinical Services</span>
            </Link>
            <button
              type="button"
              onClick={() => openBooking('Consultation Request')}
              className="btn btn-light"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

