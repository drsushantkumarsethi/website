'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, blogCategories } from '../../data/blogData';
import { doctorData } from '../../data/doctorData';
import { useAppointment } from '../../components/AppointmentContext';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Stethoscope, Sparkles } from 'lucide-react';
import { MedicalCrossSparkle, MedicalEcgLine } from '../../components/MedicalAccents';

export default function BlogIndexPage() {
  const { openBooking } = useAppointment();
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <MedicalCrossSparkle top="15%" right="8%" opacity={0.18} />
        <MedicalEcgLine top="55%" left="5%" opacity={0.12} />

        <div className="container">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">CLINICAL ARTICLES &amp; PATIENT GUIDES</span>
          </div>

          <h1 className="hero-h1" style={{ maxWidth: '820px', marginBottom: '20px' }}>
            Thoughtful medical guidance.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Written for understanding.</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-body)', maxWidth: '680px', lineHeight: 1.7 }}>
            Evidence-based perspectives on digestive wellness, liver health, endoscopic diagnostics, and preventative care by Dr. Sushant Kumar Sethi.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="blog-controls-bar">
            <div className="blog-filter-pills" role="tablist" aria-label="Article categories">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="blog-search-wrap">
              <Search size={18} className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search conditions, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
                aria-label="Search clinical guides"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Container */}
      <section className="blog-content-section" style={{ paddingBottom: '90px' }}>
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: '#f8faf9', borderRadius: '16px' }}>
              <BookOpen size={48} style={{ color: 'var(--color-primary)', margin: '0 auto 16px', opacity: 0.6 }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '8px' }}>No articles found</h3>
              <p style={{ color: 'var(--color-text-body)' }}>Try adjusting your search query or choosing a different category filter.</p>
              <button
                onClick={() => { setSelectedCategory('All Articles'); setSearchQuery(''); }}
                className="btn btn-secondary"
                style={{ marginTop: '20px' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured / Lead Article */}
              {featuredPost && selectedCategory === 'All Articles' && searchQuery === '' && (
                <article className="blog-featured-card">
                  <div className="blog-featured-img-wrap">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.coverImageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      priority
                      className="blog-featured-img"
                    />
                    <div className="blog-card-badge">Featured Clinical Guide</div>
                  </div>

                  <div className="blog-featured-content">
                    <div className="blog-card-meta">
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{featuredPost.category}</span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} /> {featuredPost.readingTime}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.publishedAt}</span>
                    </div>

                    <h2 style={{ fontSize: '1.85rem', lineHeight: 1.3, color: 'var(--color-heading)', marginBottom: '16px', fontWeight: 600 }}>
                      <Link href={`/blog/${featuredPost.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '1.02rem', lineHeight: 1.65, color: 'var(--color-text-body)', marginBottom: '28px' }}>
                      {featuredPost.excerpt}
                    </p>

                    <div className="blog-card-footer">
                      <div className="blog-author-tag">
                        <Image
                          src="/images/dr-sushant-sethi.jpg"
                          alt={featuredPost.author.name}
                          width={36}
                          height={36}
                          className="blog-author-avatar"
                        />
                        <div className="blog-author-info">
                          <span className="blog-author-name">{featuredPost.author.name}</span>
                          <span className="blog-author-title">Senior Consultant Gastroenterologist</span>
                        </div>
                      </div>

                      <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
                        <span>Read article</span>
                        <span className="arrow-icon">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid of Articles */}
              <div className="blog-grid">
                {(selectedCategory === 'All Articles' && searchQuery === '' ? gridPosts : filteredPosts).map((post) => (
                  <article key={post.slug} className="blog-card">
                    <div className="blog-card-media">
                      <Image
                        src={post.coverImage}
                        alt={post.coverImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="blog-card-img"
                      />
                      <div className="blog-card-badge">{post.category}</div>
                    </div>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} /> {post.readingTime}
                        </span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                      </div>

                      <h3 className="blog-card-title">
                        <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="blog-card-excerpt">
                        {post.excerpt}
                      </p>

                      <div className="blog-card-footer">
                        <div className="blog-author-tag">
                          <Image
                            src="/images/dr-sushant-sethi.jpg"
                            alt={post.author.name}
                            width={30}
                            height={30}
                            className="blog-author-avatar"
                          />
                          <div className="blog-author-info">
                            <span className="blog-author-name">{post.author.name}</span>
                            <span className="blog-author-title">Senior Consultant</span>
                          </div>
                        </div>

                        <Link href={`/blog/${post.slug}`} className="link-with-arrow" style={{ fontSize: '0.86rem', fontWeight: 600 }}>
                          <span>Read</span>
                          <span className="arrow-icon">↗</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* Bottom Consultation Banner */}
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
                <span className="eyebrow-text">PERSONAL CLINICAL EVALUATION</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-heading)' }}>
                Have questions about your digestive health?
              </h2>
              <p style={{ color: 'var(--color-text-body)', marginTop: '8px', maxWidth: '620px' }}>
                Schedule a focused outpatient consultation with Dr. Sushant Kumar Sethi in Bhubaneswar.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openBooking('Blog Clinical Consultation')}
              className="btn btn-primary"
            >
              <span>Book a consultation</span>
              <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
