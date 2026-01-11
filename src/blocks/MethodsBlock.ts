import { Block } from 'payload'

export const MethodsBlock: Block = {
  slug: 'methods',
  labels: {
    singular: 'Methods Section',
    plural: 'Methods Sections',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'OUR METHODS',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Why Our Method Works',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Method',
    },
    {
      name: 'subTags',
      type: 'array',
      label: 'Sub Tags (e.g. Great Tutors)',
      defaultValue: [
        { tag: 'Great Tutors' },
        { tag: 'Lesson Plans' },
        { tag: 'Interactive Learning' },
      ],
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      labels: {
        singular: 'Method Step',
        plural: 'Method Steps',
      },
      defaultValue: [
        {
          title: 'Live Classrooms',
          description:
            'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids.',
        },
        {
          title: 'Bespoke Curriculums',
          description:
            'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids.',
        },
        {
          title: 'Qualified Teachers',
          description:
            'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids.',
        },
        {
          title: 'Progress, Attendance & Result',
          description:
            'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids.',
        },
      ],
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
          label: 'Step Image',
        },
      ],
    },
  ],
}
