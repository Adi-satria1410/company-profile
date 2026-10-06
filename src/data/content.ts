import { getCollection } from 'astro:content';
import { site } from './site';
export async function getSiteContent() {
  const [services, projects] = await Promise.all([
    site.sections.services ? getCollection('services') : Promise.resolve([]),
    site.sections.projects ? getCollection('projects') : Promise.resolve([]),
  ]);
  services.sort((a, b) => a.data.order - b.data.order);
  projects.sort((a, b) => a.data.order - b.data.order);
  return {
    services,
    projects,
    nav: [
      { label: site.labels.about, href: '/tentang' },
      ...(services.length
        ? [{ label: site.labels.services, href: '/layanan' }]
        : []),
      ...(projects.length
        ? [{ label: site.labels.projects, href: '/portofolio' }]
        : []),
    ],
  };
}
