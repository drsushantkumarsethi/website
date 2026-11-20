import { doctorData } from '../data/doctorData';

/**
 * Returns only verified services for public display
 */
export function getVerifiedServices() {
  const list = doctorData.services || doctorData.procedures || [];
  return list.filter(s => s.isVerified !== false);
}

/**
 * Returns only verified clinic locations for public display
 */
export function getVerifiedClinics() {
  const list = doctorData.clinics || [];
  return list.filter(c => c.isVerified !== false);
}

/**
 * Returns only verified FAQs
 */
export function getVerifiedFaqs() {
  const list = doctorData.faqs || [];
  return list.filter(f => f.isVerified !== false);
}

/**
 * Formats full clinic address into a single readable string
 */
export function formatClinicAddress(clinic) {
  if (!clinic) return '';
  if (clinic.address) return clinic.address;
  const parts = [];
  if (clinic.addressLine1) parts.push(clinic.addressLine1);
  if (clinic.addressLine2) parts.push(clinic.addressLine2);
  if (clinic.city) parts.push(clinic.city);
  if (clinic.state) parts.push(clinic.state);
  if (clinic.postalCode) parts.push(clinic.postalCode);
  return parts.join(', ');
}

/**
 * Verification audit summary for doctor/administrative setup
 */
export function getVerificationAudit() {
  const qualifications = doctorData.doctor?.qualifications || [];
  const verifiedQualifications = qualifications.filter(q => q.isVerified !== false).length;
  const totalQualifications = qualifications.length || 4;

  const services = doctorData.services || doctorData.procedures || [];
  const verifiedServices = services.filter(s => s.isVerified !== false).length;
  const totalServices = services.length || 3;

  const clinics = doctorData.clinics || [];
  const verifiedClinics = clinics.filter(c => c.isVerified !== false).length;
  const totalClinics = clinics.length || 1;

  const isRegistrationVerified = Boolean(doctorData.doctor?.registrationNumber?.isVerified ?? true);
  const isCentralPhoneVerified = Boolean(doctorData.contact?.phone || doctorData.contact?.centralAppointmentPhone);
  const isWhatsappVerified = Boolean(doctorData.contact?.whatsappNumber || doctorData.contact?.phone);
  const isEmailVerified = Boolean(doctorData.contact?.email || doctorData.contact?.appointmentEmail);
  const isInstagramVerified = Boolean(doctorData.contact?.verifiedInstagram);

  return {
    verifiedQualifications,
    totalQualifications,
    verifiedServices,
    totalServices,
    verifiedClinics,
    totalClinics,
    isRegistrationVerified,
    isCentralPhoneVerified,
    isWhatsappVerified,
    isEmailVerified,
    isInstagramVerified,
    allVerified:
      verifiedQualifications === totalQualifications &&
      verifiedServices === totalServices &&
      verifiedClinics === totalClinics &&
      isRegistrationVerified &&
      isCentralPhoneVerified &&
      isEmailVerified
  };
}
