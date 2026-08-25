'use client';

type EventParams = Record<string, string | number | boolean | undefined>;

interface WindowWithDataLayer extends Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}

function getDataLayer(): unknown[] {
  if (typeof window === 'undefined') return [];
  const w = window as unknown as WindowWithDataLayer;
  w.dataLayer = w.dataLayer || [];
  return w.dataLayer;
}

function getGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as WindowWithDataLayer;
  if (typeof w.gtag === 'function') return w.gtag;
  return null;
}

export function track(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  const dataLayer = getDataLayer();
  dataLayer.push({ event: eventName, ...params });

  const gtag = getGtag();
  if (gtag) {
    gtag('event', eventName, params);
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, params);
  }
}

export function pageView(url: string, title?: string) {
  track('page_view', {
    page_location: url,
    page_title: title,
  });
}

export function auditRequest(data: {
  businessType: string;
  objective: string;
  hasWebsite: boolean;
}) {
  track('audit_request', data);
}

export function contactSubmit(data: {
  formType: 'audit' | 'general';
  businessType: string;
}) {
  track('contact_submit', data);
}

export function serviceView(serviceSlug: string) {
  track('service_view', { service: serviceSlug });
}

export function caseStudyView(caseStudySlug: string) {
  track('case_study_view', { caseStudy: caseStudySlug });
}

export function ctaClick(ctaLabel: string, location: string) {
  track('cta_click', { cta: ctaLabel, location });
}