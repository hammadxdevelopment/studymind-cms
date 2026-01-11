import { Block } from 'payload'

export const TrustedBlock: Block = {
  slug: 'trusted',
  labels: {
    singular: 'Trusted Section',
    plural: 'Trusted Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'OUR PARTNERS',
      label: 'Small Label (Subtitle)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'We Are Trusted By',
      label: 'Main Heading',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Trusted',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids, we make studying smarter, easier.',
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Trusted Metrics (Cards)',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'metric',
          type: 'text',
          label: 'Metric Title (e.g. 200+ Schools)',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Card Image',
        },
      ],
    },
  ],
}
