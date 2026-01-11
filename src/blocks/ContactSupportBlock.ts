import { Block } from 'payload'

export const ContactSupportBlock: Block = {
  slug: 'contactSupport',
  labels: {
    singular: 'Contact Support Section',
    plural: 'Contact Support Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'SUPPORT',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'For Dedicated Support',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Dedicated',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Support Cards',
      minRows: 1,
      fields: [
        {
          name: 'headerImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Header Label Image (e.g. "Phone" icon/text image)',
        },
        {
          name: 'contentType',
          type: 'select',
          defaultValue: 'text',
          label: 'Card Content Type',
          options: [
            { label: 'Text (Phone Number / Email)', value: 'text' },
            { label: 'Image (Social Media Icons)', value: 'image' },
          ],
        },
        {
          name: 'textValue',
          type: 'text',
          label: 'Content Text',
          admin: {
            condition: (_, siblingData) => siblingData.contentType === 'text',
          },
        },
        {
          name: 'imageValue',
          type: 'upload',
          relationTo: 'media',
          label: 'Content Image',
          admin: {
            condition: (_, siblingData) => siblingData.contentType === 'image',
          },
        },
      ],
    },
  ],
}
