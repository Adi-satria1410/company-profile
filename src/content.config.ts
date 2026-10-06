import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const md = (name: string) =>
  glob({ pattern: '**/*.md', base: `./src/content/${name}` });
const picture = { image: z.string().optional(), alt: z.string().optional() };
const hasAlt = (data: { image?: string; alt?: string }) =>
  !data.image || Boolean(data.alt?.trim());
const imageMessage = {
  message: 'Gambar harus memiliki alt text.',
  path: ['alt'],
};
const services = defineCollection({
  loader: md('services'),
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      features: z.array(z.string()).default([]),
      ...picture,
      order: z.number().default(0),
    })
    .refine(hasAlt, imageMessage),
});
const projects = defineCollection({
  loader: md('projects'),
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      client: z.string().optional(),
      year: z.number().optional(),
      category: z.string().optional(),
      ...picture,
      featured: z.boolean().default(false),
      order: z.number().default(0),
    })
    .refine(hasAlt, imageMessage),
});
const team = defineCollection({
  loader: md('team'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(0),
  }),
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
