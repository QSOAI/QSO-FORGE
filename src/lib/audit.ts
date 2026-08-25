import type { AuditDimension, AuditScore, AuditFinding, RevenueAudit, ImpactLabel } from '@/types';

export const AUDIT_DIMENSIONS: AuditDimension[] = [
  'website',
  'mobile',
  'conversion',
  'seo',
  'trust',
  'booking',
];

export const DIMENSION_LABELS: Record<AuditDimension, string> = {
  website: 'Website',
  mobile: 'Mobile Experience',
  conversion: 'Conversion Architecture',
  seo: 'SEO & Discoverability',
  trust: 'Trust & Credibility',
  booking: 'Booking & Inquiry Flow',
};

export const IMPACT_LABELS: ImpactLabel[] = ['evidence', 'estimate', 'hypothesis', 'unknown'];

export const IMPACT_LABEL_DESCRIPTIONS: Record<ImpactLabel, string> = {
  evidence: 'Supported by measured data from this business or directly comparable benchmarks',
  estimate: 'Based on industry averages, heuristic models, or reasonable extrapolation',
  hypothesis: 'A testable prediction requiring validation through implementation and measurement',
  unknown: 'Insufficient data to form a reliable prediction; further discovery required',
};

export function calculateTotalScore(scores: AuditScore[]): number {
  return scores.reduce((sum, s) => sum + Math.max(0, Math.min(10, s.score)), 0);
}

export function validateScore(score: number): boolean {
  return Number.isInteger(score) && score >= 0 && score <= 10;
}

export function createEmptyScores(): AuditScore[] {
  return AUDIT_DIMENSIONS.map(dimension => ({ dimension, score: 0 }));
}

export function generateAuditId(): string {
  return `audit_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export function createFinding(
  dimension: AuditDimension,
  title: string,
  whatsBroken: string,
  whyItMatters: string,
  whatToFix: string,
  whatToBuildFirst: string,
  expectedImpact: { label: ImpactLabel; description: string }
): AuditFinding {
  return {
    id: `finding_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    dimension,
    title,
    whatsBroken,
    whyItMatters,
    whatToFix,
    whatToBuildFirst,
    expectedImpact,
  };
}

export function createRevenueAudit(
  businessName: string,
  website: string,
  scores: AuditScore[],
  findings: AuditFinding[]
): RevenueAudit {
  const now = new Date().toISOString();
  return {
    id: generateAuditId(),
    businessName,
    website,
    scores,
    totalScore: calculateTotalScore(scores),
    maxScore: 60,
    findings,
    createdAt: now,
    updatedAt: now,
  };
}

export function auditToJSON(audit: RevenueAudit): string {
  return JSON.stringify(audit, null, 2);
}

export function auditFromJSON(json: string): RevenueAudit {
  return JSON.parse(json);
}