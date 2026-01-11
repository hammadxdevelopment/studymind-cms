import { Block } from 'payload'

export const EnquiryBlock: Block = {
  slug: 'enquiry',
  labels: {
    singular: 'Enquiry Section',
    plural: 'Enquiry Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: '5 steps to achieve success',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Forms & Enquiry',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Enquiry',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Check out our Interview Tuition Bundles! They give you super easy access to one-on-one tutoring with medical schools, no hassle at all.',
    },
    {
      name: 'formTitle',
      type: 'text',
      defaultValue: 'Book a free consultation',
      label: 'Form Header Title',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Process Steps',
      minRows: 3,
      maxRows: 3,
      fields: [
        { name: 'stepNumber', type: 'text', defaultValue: '1', required: true },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Speak to our AP Team',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Check out our Interview Tuition Bundles for super easy, no-fuss one-on-one tutoring!',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Step Image',
        },
      ],
    },
  ],
}
