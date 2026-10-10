import React, { useState } from 'react';

const CONTACT_EMAIL = 'interiorvizstudio@gmail.com';

const PROJECT_TYPES = {
  'full-home': 'Full home interior',
  'single-room': 'A single room',
  'space-planning': 'Space planning',
  styling: 'Styling & finishing',
  consultation: 'Design consultation',
  other: 'Something else'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `New website enquiry from ${formData.name}`,
          _template: 'table',
          _replyto: formData.email,
          _captcha: false,
          'Full Name': formData.name,
          'Email Address': formData.email,
          'Project Type': PROJECT_TYPES[formData.projectType] || formData.projectType,
          'Project Details': formData.message
        })
      });
      if (!response.ok) throw new Error('Send failed');
      setStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Start a conversation</span>
          <h2 className="section-title">A space on your <span className="highlight">mind?</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">Tell me what you are dreaming up. A little about your space and what you need is a lovely place to begin.</p>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"/>
                  <path d="M7 8h10M7 12h6M7 16h8"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Design services</h4>
                <span>Full rooms, thoughtful details, and more</span>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>First step</h4>
                <span>A relaxed conversation about your space</span>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Design approach</h4>
                <span>Personal, considered, and collaborative</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className="form-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Message sent! I'll get back to you within 24 hours.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span>Something went wrong. Please email me directly at {CONTACT_EMAIL}.</span>
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Choose a starting point</option>
                <option value="full-home">Full home interior</option>
                <option value="single-room">A single room</option>
                <option value="space-planning">Space planning</option>
                <option value="styling">Styling & finishing</option>
                <option value="consultation">Design consultation</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me a little about your space, what you have in mind, and how you would like it to feel."
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending…' : 'Send an enquiry'}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
