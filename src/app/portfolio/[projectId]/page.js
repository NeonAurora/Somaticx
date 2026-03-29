import dynamic from 'next/dynamic';
import Layout from '@/components/common/Layout/Layout';
import ClientOnly from '@/components/common/ClientOnly/ClientOnly';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

// Dynamic imports for animation-heavy components
const ProjectDetailHero = dynamic(() => import('@/components/Portfolio/ProjectDetailHero/ProjectDetailHero'), {
  loading: () => <div style={{ height: '100vh', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }} />
});

const ProjectDetailContent = dynamic(() => import('@/components/Portfolio/ProjectDetailContent/ProjectDetailContent'));

export default async function ProjectDetailPage({ params }) {
  const { projectId } = await params;
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