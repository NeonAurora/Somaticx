'use client';

import { use } from 'react';
import Layout from '@/components/common/Layout/Layout';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }) {
  const { projectId } = use(params);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* This will be a dedicated project detail page if needed */}
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-lg text-gray-600">{project.fullDescription}</p>
        </div>
      </div>
    </Layout>
  );
}