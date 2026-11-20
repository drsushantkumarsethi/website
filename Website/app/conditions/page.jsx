'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '../../data/doctorData';
import { useAppointment } from '../../components/AppointmentContext';
import { Search } from 'lucide-react';

export default function ConditionsPage() {
  const { openBooking } = useAppointment();
  const [activeCategory, setActiveCategory] = useState('All conditions');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All conditions', 'Stomach', 'Liver', 'Bowel', 'Pancreas'];

  const filteredConditions = doctorData.doctor.conditions.filter((c) => {
    const matchesCategory =
      activeCategory === 'All conditions' ||
      c.bodyCategory.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryTag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="conditions-page" style={{ padding: '40px 0 90px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <span>Conditions</span>
        </nav>

        {/* Hero Row (Screenshot 3) */}
        <div className="doctor-hero-grid" style={{ marginBottom: '60px' }}>
          <div>
            <div className="eyebrow-wrap">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">CONDITIONS &amp; CARE</span>
            </div>

            <h1 className="doctor-hero-h1">
              Understanding is<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>the first step.</span>
            </h1>

            <p className="doctor-hero-subtitle">
              Clear guides to digestive, liver, bowel, and pancreatic concerns — and what to discuss at your next consultation.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="meet-img-frame" style={{ maxWidth: '380px', width: '100%', borderRadius: '140px 20px 20px 20px' }}>
              <Image
                src="/images/condition-ibs.jpg"
                alt="Doctor consultation"
                width={380}
                height={260}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                background: '#163b34',
                color: '#ffffff',
                padding: '6px 14px',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                ILLUSTRATIVE PHOTOGRAPHY • Pexels
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills & Search Input (Screenshot 4) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--color-border-light)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  backgroundColor: activeCategory === cat ? 'var(--color-primary)' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : 'var(--color-text-body)',
                  border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', minWidth: '240px' }}>
            <input
              type="text"
              placeholder="Find a condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 36px 8px 14px',
                borderRadius: '6px',
                border: '1px solid var(--color-border)',
                fontSize: '0.86rem',
                outline: 'none'
              }}
            />
            <Search size={16} color="#94a39f" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginBottom: '32px' }}>
          {filteredConditions.length} condition guides
        </div>

        {/* Condition Cards Grid (Screenshot 4, 5) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
          marginBottom: '50px'
        }}>
          {filteredConditions.map((item) => (
            <div key={item.slug} className="condition-card">
              <div className="condition-img-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={340}
                  height={180}
                  className="condition-img"
                />
                <span className="condition-num-badge">{item.number}</span>
              </div>
              <div className="condition-body">
                <div className="condition-cat">{item.categoryTag}</div>
                <h2 className="condition-title">{item.title}</h2>
                <p className="condition-desc">{item.shortDescription}</p>
                <div>
                  <Link href={`/conditions/${item.slug}`} className="link-with-arrow">
                    <span>Understand the condition</span>
                    <span className="arrow-icon">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Banner (Screenshot 6) */}
        <div style={{
          borderLeft: '2px solid var(--color-primary)',
          padding: '14px 20px',
          backgroundColor: '#fbfdfc',
          fontSize: '0.86rem',
          color: 'var(--color-text-muted)',
          marginBottom: '70px'
        }}>
          These guides provide general information. Your symptoms and medical history determine the right assessment and treatment.
        </div>

        {/* Bottom Banner: Let's find a clearer way forward */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          paddingTop: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div className="eyebrow-wrap">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">YOUR NEXT CHAPTER IN HEALTH</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-heading)' }}>
              Let&apos;s find a clearer way forward.
            </h2>
          </div>

          <button
            onClick={() => openBooking()}
            className="btn btn-primary"
          >
            <span>Arrange a consultation</span>
            <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
