'use client';

import { useState } from 'react';
import type { Locale } from '@/types';

interface ContactFormData {
  name: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  businessType: string;
  objective: string;
  message: string;
  website_url: string;
}

interface ContactFormProps {
  locale: Locale;
  messages: any;
}

export function ContactForm({ locale, messages }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    businessType: '',
    objective: '',
    message: '',
    website_url: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    const validation = messages.contact.form.validation;

    if (!formData.name.trim()) newErrors.name = validation.nameRequired;
    if (!formData.company.trim()) newErrors.company = validation.companyRequired;
    if (!formData.website.trim()) newErrors.website = validation.websiteRequired;
    else if (!/^https?:\/\/.+/.test(formData.website)) newErrors.website = validation.websiteInvalid;
    if (!formData.email.trim()) newErrors.email = validation.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = validation.emailInvalid;
    if (!formData.phone.trim()) newErrors.phone = validation.phoneRequired;
    if (!formData.businessType.trim()) newErrors.businessType = validation.businessTypeRequired;
    if (!formData.objective.trim()) newErrors.objective = validation.objectiveRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website_url) {
      return;
    }

    if (!validateForm()) return;

    setStatus('submitting');

    try {
      console.log('Contact form submission:', {
        ...formData,
        locale,
        timestamp: new Date().toISOString(),
        stage: 'PROSPECT',
      });

      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        website: '',
        email: '',
        phone: '',
        businessType: '',
        objective: '',
        message: '',
        website_url: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const form = messages.contact.form;

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-ledger-dark" aria-labelledby="contact-heading">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 id="contact-heading" className="heading-lg text-ledger-light kinetic">
              {messages.contact.headline}
            </h1>
            <p className="mt-4 body-md text-ledger-muted">
              {messages.contact.subheadline}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {status === 'success' && (
              <div className="mb-8 p-6 bg-ledger-accent/10 border border-ledger-accent/20 rounded-lg text-center animate-fade-in" role="alert">
                <svg className="w-12 h-12 mx-auto text-ledger-accent mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-ledger-light font-medium">{form.success}</p>
                <p className="mt-2 text-ledger-muted text-sm">A reference ID has been logged. We'll be in touch within 24 hours.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-6 bg-red-950/20 border border-red-900/30 rounded-lg text-center animate-fade-in" role="alert">
                <svg className="w-12 h-12 mx-auto text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-ledger-light font-medium">{form.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="label-field">
                    {form.name} <span className="text-ledger-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder={form.namePlaceholder}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="label-field">
                    {form.company} <span className="text-ledger-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`input-field ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder={form.companyPlaceholder}
                    aria-invalid={errors.company ? 'true' : 'false'}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="website" className="label-field">
                  {form.website} <span className="text-ledger-accent" aria-hidden="true">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={`input-field ${errors.website ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  placeholder={form.websitePlaceholder}
                  aria-invalid={errors.website ? 'true' : 'false'}
                  aria-describedby={errors.website ? 'website-error' : undefined}
                  disabled={status === 'submitting'}
                />
                {errors.website && (
                  <p id="website-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.website}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="email" className="label-field">
                    {form.email} <span className="text-ledger-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder={form.emailPlaceholder}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="label-field">
                    {form.phone} <span className="text-ledger-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`input-field ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder={form.phonePlaceholder}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="businessType" className="label-field">
                    {form.businessType} <span className="text-ledger-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`input-field ${errors.businessType ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder={form.businessTypePlaceholder}
                    aria-invalid={errors.businessType ? 'true' : 'false'}
                    aria-describedby={errors.businessType ? 'businessType-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.businessType && (
                    <p id="businessType-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.businessType}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="objective" className="label-field">
                    {form.objective} <span className="text-ledger-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    className={`input-field ${errors.objective ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    placeholder={form.objectivePlaceholder}
                    aria-invalid={errors.objective ? 'true' : 'false'}
                    aria-describedby={errors.objective ? 'objective-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  {errors.objective && (
                    <p id="objective-error" className="mt-1.5 text-sm text-red-400" role="alert">{errors.objective}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="label-field">
                  {form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`input-field resize-y ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  placeholder={form.messagePlaceholder}
                  disabled={status === 'submitting'}
                />
              </div>

              <input
                type="text"
                name="website_url"
                value={formData.website_url}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? form.submitting : form.submit}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-ledger-muted space-y-2">
              <p>
                <a href="mailto:quantumshiftorg@gmail.com" className="text-ledger-light hover:text-ledger-accent underline underline-offset-2">
                  quantumshiftorg@gmail.com
                </a>
                <span className="mx-2">•</span>
                <a href="tel:+212619852591" className="text-ledger-light hover:text-ledger-accent underline underline-offset-2">
                  +212 619-852591
                </a>
                <span className="mx-2">•</span>
                <a href="https://wa.me/212619852591" target="_blank" rel="noopener noreferrer" className="text-ledger-accent hover:text-ledger-light underline underline-offset-2">
                  WhatsApp
                </a>
              </p>
              <p className="text-xs text-ledger-muted/60">{messages.contact.alternative}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}