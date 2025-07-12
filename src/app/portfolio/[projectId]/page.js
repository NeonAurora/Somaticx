'use client';

import { use } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectDetailHero from '@/components/Portfolio/ProjectDetailHero/ProjectDetailHero';
import ProjectDetailContent from '@/components/Portfolio/ProjectDetailContent/ProjectDetailContent';

// Dynamic imports for animation-heavy components
const ProjectDetailHero = dynamic(() => import('@/components/Portfolio/ProjectDetailHero/ProjectDetailHero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const ProjectDetailContent = dynamic(() => import('@/components/Portfolio/ProjectDetailContent/ProjectDetailContent'), { ssr: false });

export default function ProjectDetailPage({ params }) {
  const { projectId } = use(params);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Layout>
        <ClientOnly fallback={<div style={{ height: '100vh' }} />}>
          <ProjectDetailHero project={project} />
        </ClientOnly>
        
        <ClientOnly>
          <ProjectDetailContent project={project} />
        </ClientOnly>
      </Layout>
    </main>
  );
}