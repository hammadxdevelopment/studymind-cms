import { Block } from 'payload'

export const CurriculumBlock: Block = {
  slug: 'curriculum',
  labels: {
    singular: 'Curriculum Section',
    plural: 'Curriculum Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our curriculums and solutions',
      label: 'Section Title',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Curriculum Items',
      minRows: 1,
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
      ],
    },
  ],
}
