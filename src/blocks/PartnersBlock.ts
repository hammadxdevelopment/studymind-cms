import { Block } from 'payload'

export const PartnersBlock: Block = {
  slug: 'partners',
  labels: {
    singular: 'Partners Section',
    plural: 'Partners Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'OUR PARTNERS',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Who We Work With',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Work',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids, we make studying smarter, easier, and more engaging for students everywhere!',
    },
    {
      name: 'partnersList',
      type: 'array',
      label: 'Partners Cards',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color (Hex)',
          defaultValue: '#F4E9FF',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Border Color (Hex)',
          defaultValue: '#E7C9FF',
        },
      ],
    },
  ],
}
