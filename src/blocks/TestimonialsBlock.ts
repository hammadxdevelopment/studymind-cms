import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'TESTIMONIALS',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Success Rate',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Success Rate',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids.',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Feature Testimonials (Carousel)',
      minRows: 1,
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'HIGH SCHOOL' },
        { name: 'title', type: 'text', required: true },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics Cards',
      minRows: 2,
      maxRows: 2,
      fields: [
        { name: 'value', type: 'text', defaultValue: '93%', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'caseStudy',
      type: 'group',
      label: 'Case Study Card',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'impact',
      type: 'group',
      label: 'Impact Card',
      fields: [
        { name: 'value', type: 'text', defaultValue: '98%', required: true },
        { name: 'label', type: 'text', defaultValue: 'Satisfaction Rate' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
  ],
}
