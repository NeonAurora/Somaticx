 
'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout/Layout';
import CareersHero from '@/components/Careers/CareersHero/CareersHero';
import JobGrid from '@/components/Careers/JobGrid/JobGrid';
import ApplicationProcess from '@/components/Careers/ApplicationProcess/ApplicationProcess';
import CompanyCulture from '@/components/Careers/CompanyCulture/CompanyCulture';
import { jobOpenings } from '@/data/careers';

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const departments = ['all', 'engineering', 'product', 'research', 'operations', 'marketing', 'sales'];

  return (
    <Layout>
      <CareersHero />
      <CompanyCulture />
      <JobGrid 
        jobs={jobOpenings}
        activeFilter={activeFilter}
      />
      <ApplicationProcess />
    </Layout>
  );
}