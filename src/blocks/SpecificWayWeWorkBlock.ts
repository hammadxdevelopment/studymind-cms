import { Block } from 'payload'

export const SpecificWayWeWorkBlock: Block = {
  slug: 'specificWayWeWork',
  labels: {
    singular: 'Specific Way We Work Section',
    plural: 'Specific Way We Work Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'THE WAY WE WORK',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'How We Can Help?',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Help?',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Content Paragraphs',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Display Image',
    },
  ],
}
