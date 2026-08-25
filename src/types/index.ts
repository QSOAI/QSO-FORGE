export type Locale = 'en' | 'fr' | 'ar';

export type AuditDimension =
  | 'website'
  | 'mobile'
  | 'conversion'
  | 'seo'
  | 'trust'
  | 'booking';

export interface AuditScore {
  dimension: AuditDimension;
  score: number;
  notes?: string;
}

export type ImpactLabel = 'evidence' | 'estimate' | 'hypothesis' | 'unknown';

export interface AuditFinding {
  id: string;
  dimension: AuditDimension;
  title: string;
  whatsBroken: string;
  whyItMatters: string;
  whatToFix: string;
  whatToBuildFirst: string;
  expectedImpact: {
    label: ImpactLabel;
    description: string;
  };
}

export interface RevenueAudit {
  id: string;
  businessName: string;
  website: string;
  scores: AuditScore[];
  totalScore: number;
  maxScore: number;
  findings: AuditFinding[];
  createdAt: string;
  updatedAt: string;
}

export type PipelineStage =
  | 'PROSPECT'
  | 'AUDIT'
  | 'FINDINGS'
  | 'OFFER'
  | 'OUTREACH'
  | 'PIPELINE'
  | 'CLOSED';

export interface PipelineEntry {
  id: string;
  stage: PipelineStage;
  name: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  businessType: string;
  objective: string;
  message?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  priceRange: { min: number; max: number; currency: string };
  ctaText: string;
  ctaHref: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
  outcomeDataStatus: 'measured' | 'pending' | 'not-applicable';
  isClientEndorsement: boolean;
  featured: boolean;
}