import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(), // Meta description SEO
    lang: z.enum(['fr', 'es']),
    serviceSlug: z.string(),
    
    hero: z.object({
      image: image(),
      alt: z.string(),
    }).optional(),
    
    lead: z.string(),
    
    sections: z.array(z.discriminatedUnion('kind', [
      z.object({
        kind: z.literal('text'),
        title: z.string(),
        body: z.string(),
      }),
      z.object({
        kind: z.literal('list'),
        title: z.string(),
        items: z.array(z.union([
          z.string(),
          z.object({
            label: z.string(),
            text: z.string(),
          }),
        ])),
      }),
    ])),
    
    benefitsTitle: z.string().optional(),
    benefits: z.array(z.string()),
    
    aside: z.object({
      label: z.string(),
      text: z.string(),
    }),
    
    cta: z.object({
      href: z.string(),
      label: z.string(),
    }),
  }),
});

export const collections = {
  services: servicesCollection,
};