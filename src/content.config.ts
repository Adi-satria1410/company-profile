import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const md = (name: string) => glob({ pattern: '**/*.md', base: `./src/content/${name}` });

const services = defineCollection({
  loader: md('services'),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    features: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    category: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  loader: md('team'),
  schema: z.object({ name: z.string(), role: z.string(), order: z.number().default(0) }),
});

const testimonials = defineCollection({
  loader: md('testimonials'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { services, projects, team, testimonials };
