'use client';

import React, { createContext, useContext, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import VerificationDrawer from './VerificationDrawer';

const AppointmentContext = createContext(null);

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
        closeAudit
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
