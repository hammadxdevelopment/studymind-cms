import { Block } from 'payload'

export const SpecificSolutionsBlock: Block = {
  slug: 'specificSolutions',
  labels: {
    singular: 'Specific Solutions Section',
    plural: 'Specific Solutions Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'OUR SOLUTIONS',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Solution for',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Schools',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'We partner with schools to deliver adaptable, curriculum-aligned programs that enhance learning outcomes, improve engagement, and fit seamlessly with teaching structures.',
    },
    {
      name: 'virtualTab',
      type: 'group',
      label: 'Tab 1: Virtual Academy',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Virtual Academy',
          label: 'Tab Button Label',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'VIRTUAL ACADEMY',
          label: 'Content Title',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Our Virtual Academy makes quality education accessible to every student, wherever they are.',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          fields: [
            {
              name: 'text',
              type: 'text',
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
    },
    {
      name: 'tutoringTab',
      type: 'group',
      label: 'Tab 2: 1-1 Tutoring',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: '1-1 Tutoring',
          label: 'Tab Button Label',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: '1-1 TUTORING',
          label: 'Content Title',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Personalized one-on-one sessions tailored to individual student needs.',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          fields: [
            {
              name: 'text',
              type: 'text',
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
    },
  ],
}
