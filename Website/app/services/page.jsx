'use client';

import React, { useState } from 'react';
import { getVerifiedServices } from '../../utils/dataHelpers';
import ServiceCard from '../../components/ServiceCard';
import { useAppointment } from '../../components/AppointmentContext';
import { Calendar, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const allServices = getVerifiedServices();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { openBooking } = useAppointment();

  const categories = ['All', 'Gastroenterology', 'Hepatology', 'Endoscopy', 'Preventive Care'];

  const filteredServices = selectedCategory === 'All'
    ? allServices
    : allServices.filter(s => s.category === selectedCategory);

  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-header-section">
        <div className="container">
          <div className="services-header-content">
            <span className="section-eyebrow">Clinical Specialities & Diagnostic Care</span>
            <h1 className="services-title">Gastroenterology, Hepatology & Endoscopy</h1>
            <p className="services-subtitle">
              Doctor-approved clinical pathways for accurate evaluation, minimally invasive diagnosis, and tailored management of digestive and liver diseases.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="section-padding services-main-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="services-filter-bar">
            <div className="filter-pill-group" role="tablist" aria-label="Service Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`service-filter-pill ${selectedCategory === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="services-count-badge">
              <span>Showing {filteredServices.length} {selectedCategory === 'All' ? 'clinical specialities' : `${selectedCategory} areas`}</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="services-grid-page">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={(title) => openBooking(title)}
              />
            ))}
          </div>

          {/* Clinical Consultation Info Box */}
          <div className="consultation-guidance-card editorial-card">
            <div className="guidance-header">
              <ShieldCheck size={24} className="guidance-icon" />
              <div>
                <h3 className="guidance-title">Doctor-Approved Clinical Consultation Guidance</h3>
                <p className="guidance-lead">
                  Every patient’s gastrointestinal health requires a thorough, personalized diagnostic strategy.
                </p>
              </div>
            </div>

            <div className="guidance-grid">
              <div className="guidance-col">
                <h4 className="col-title">When is specialized evaluation recommended?</h4>
                <ul className="guidance-list">
                  <li>Symptoms persistent for more than 2-3 weeks despite basic medication.</li>
                  <li>Noticeable unintentional weight loss or poor appetite.</li>
                  <li>Elevated liver enzymes on routine annual blood tests.</li>
                  <li>Recurrent heartburn, regurgitation, or swallowing discomfort.</li>
                </ul>
              </div>

              <div className="guidance-col">
                <h4 className="col-title">How to maximize your consultation:</h4>
                <ul className="guidance-list">
                  <li>Bring chronological copies of previous ultrasounds, CT scans, and blood tests.</li>
                  <li>List any regular medications (including pain relievers and antacids).</li>
                  <li>Bring prior endoscopy or colonoscopy reports with biopsy results if available.</li>
                </ul>
              </div>
            </div>

            <div className="guidance-footer">
              <button onClick={() => openBooking()} className="btn btn-primary">
                <Calendar size={16} />
                <span>Book a Consultation with Dr. Sethi</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

