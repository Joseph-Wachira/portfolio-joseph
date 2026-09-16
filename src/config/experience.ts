import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Figbloom Digital Group Ltd',
    location: 'Nairobi, Kenya',
    startDate: '2026-07',
    description:
      'Develop and maintain full-stack features — including billing, security, and workspace-management functionality — for a property management platform, covering API design, database modeling, authentication, payment integration, and deployment. Design backend endpoints and database models for workspace billing, per-user session security, and property defaults, and build the corresponding React frontend pages. Implement session-based security workflows, including listing/revoking active sessions and OTP-driven verification, and integrate Paystack for payment processing.',
    type: 'Full-time',
  },
  {
    title: 'Industrial Attachment Trainee',
    company: 'Office of Birth and Death Registry',
    location: 'Karatina, Kenya',
    startDate: '2025-05',
    endDate: '2025-08',
    description:
      'Digitized and managed civil registration records, analyzed existing workflows to identify operational bottlenecks, and used SQL to identify and clean 2,000+ duplicate civil records. Proposed and prototyped an automated data-validation script that reduced manual verification effort by roughly 15 hours per week and was adopted by the team.',
    type: 'Internship',
  },
  {
    title: 'Freelance Photographer',
    company: 'Self-Employed',
    location: 'Kenya',
    startDate: '2021-01',
    description:
      'Manage end-to-end client projects — planning, execution, digital delivery, and communication — with automated delivery workflows built on cloud storage. Maintain digital assets and metadata for 20+ clients with structured backups and version-control practices.',
    type: 'Freelance',
  },
];
