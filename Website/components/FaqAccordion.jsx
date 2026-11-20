'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export default function FaqAccordion({ faqs, enableFilter = true }) {
  const [openIds, setOpenIds] = useState([faqs[0]?.id || '']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];

  const toggleItem = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-container">
      {enableFilter && (
        <div className="faq-controls">
          {/* Search Box */}
          <div className="faq-search-box">
            <Search size={16} className="faq-search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search digestive questions (e.g. endoscopy, fatty liver, acidity)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              aria-label="Search frequently asked questions"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="faq-category-pills" role="tablist" aria-label="FAQ Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${activeCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accordion List */}
      <div className="faq-list">
        {filteredFaqs.length === 0 ? (
          <div className="faq-empty-state">
            <HelpCircle size={28} />
            <p>No questions matched your search query. Please try different keywords or consult Dr. Sethi directly.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const questionId = `faq-q-${faq.id}`;
            const answerId = `faq-a-${faq.id}`;

            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(faq.id)}
                  className="faq-question-btn"
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-wrapper" aria-hidden="true">
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`} />
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`faq-answer-panel ${isOpen ? 'is-visible' : ''}`}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                    <div className="faq-tag">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
