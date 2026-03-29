import Layout from '@/components/common/Layout/Layout';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Layout>
        <ProjectDetailClient project={project} />
      </Layout>
    </main>
  );
}
