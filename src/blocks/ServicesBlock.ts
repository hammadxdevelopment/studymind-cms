import { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services',
  labels: {
    singular: 'Services Section',
    plural: 'Services Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'WHY CHOOSE US?',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Services',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Services',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids, we make studying smarter, easier, and more engaging for students everywhere!',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Service Cards',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'bottomTagline',
      type: 'group',
      label: 'Bottom Tagline Bar',
      fields: [
        { name: 'text1', type: 'text', defaultValue: 'Offered for' },
        { name: 'highlightedTag', type: 'text', defaultValue: 'KS1-5' },
        { name: 'text2', type: 'text', defaultValue: 'and' },
        { name: 'outlinedTag', type: 'text', defaultValue: 'Qualifications' },
        { name: 'text3', type: 'text', defaultValue: 'Offered' },
      ],
    },
  ],
}
