import { Block } from 'payload'

export const SpecificNeedHelpBlock: Block = {
  slug: 'specificNeedHelp',
  labels: {
    singular: 'Specific Need Help Section',
    plural: 'Specific Need Help Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'NEED HELP?',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'What Are You Looking for',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Looking for',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'We partner with schools to deliver adaptable, curriculum-aligned programs that enhance learning outcomes, improve engagement, and fit seamlessly with teaching structures.',
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Help Categories (Tabs)',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Tab Name (e.g. Alternative Provision)',
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
      ],
    },
  ],
}
