 
'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout';
import CareersHero from '@/components/CareersHero';
import JobGrid from '@/components/JobGrid';
import ApplicationProcess from '@/components/ApplicationProcess';
import CompanyCulture from '@/components/CompanyCulture';
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