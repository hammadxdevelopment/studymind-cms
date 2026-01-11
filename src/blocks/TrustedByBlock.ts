import { Block } from 'payload'

export const TrustedByBlock: Block = {
  slug: 'trustedBy',
  labels: {
    singular: 'Trusted By Section',
    plural: 'Trusted By Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Trusted by Universities & NHS',
      label: 'Section Title',
    },
    {
      name: 'partners',
      type: 'array',
      label: 'Partner Logos',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo Image',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
          required: true,
        },
        {
          name: 'customClass',
          type: 'text',
          label: 'Custom CSS Class (Optional)',
          defaultValue: '',
          admin: {
            description: 'e.g. "w-full md:w-[206.8px]" for larger logos',
          },
        },
      ],
    },
  ],
}
