import { Block } from 'payload'

export const LeadershipBlock: Block = {
  slug: 'leadership',
  labels: {
    singular: 'Leadership Section',
    plural: 'Leadership Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'MEET THE TEAM',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Leadership',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Leadership',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Work experience programs for ages 15-18 in 15 industries. Pick your career path, then choose a Weekend Program or Summer Experience.',
    },
    {
      name: 'team',
      type: 'array',
      label: 'Team Members',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Profile Photo',
        },
      ],
    },
  ],
}
