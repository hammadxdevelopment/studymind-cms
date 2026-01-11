import { Block } from 'payload'

export const AboutValuesBlock: Block = {
  slug: 'aboutValues',
  labels: {
    singular: 'About Values Section',
    plural: 'About Values Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'WHY STUDY MIND',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Core Values And Ethos',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Values',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'valuesList',
      type: 'array',
      label: 'Values Cards',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Icon Image',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description Text',
        },
      ],
    },
  ],
}
