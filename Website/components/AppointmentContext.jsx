'use client';

import React, { createContext, useContext, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import VerificationDrawer from './VerificationDrawer';

const AppointmentContext = createContext(null);

export const getConsultationMailto = (serviceTitle = 'Gastroenterology & Hepatology Consultation', details = {}) => {
  const email = 'drsushantkumarsethi@gmail.com';
  const subject = `Consultation Appointment Request - Dr. Sushant Kumar Sethi`;
  const body = `Dear Dr. Sushant Kumar Sethi,

I would like to request a consultation appointment.

Consultation / Concern: ${serviceTitle || 'Gastroenterology & Hepatology Consultation'}
Full Name: ${details.name || ''}
Contact Phone Number: ${details.phone || ''}
Preferred Date & Time: ${details.date || ''}
Location: Bhubaneswar, Odisha
Symptoms / Health Notes: ${details.notes || ''}

Thank you.`;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export function AppointmentProvider({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(undefined);
  const [preselectedClinic, setPreselectedClinic] = useState(undefined);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const openBooking = (serviceTitle = undefined, clinicId = undefined) => {
    setPreselectedService(serviceTitle);
    setPreselectedClinic(clinicId);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService(undefined);
    setPreselectedClinic(undefined);
  };

  const openAudit = () => {
    setIsAuditOpen(true);
  };

  const closeAudit = () => {
    setIsAuditOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        isBookingOpen,
        preselectedService,
        preselectedClinic,
        isAuditOpen,
        openBooking,
        closeBooking,
        openAudit,
        closeAudit,
        getConsultationMailto
      }}
    >
      {children}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        preselectedServiceId={preselectedService}
        preselectedClinicId={preselectedClinic}
      />
      <VerificationDrawer
        isOpen={isAuditOpen}
        onClose={closeAudit}
      />
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}
