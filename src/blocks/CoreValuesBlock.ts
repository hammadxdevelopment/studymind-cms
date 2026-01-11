import { Block } from 'payload'

export const CoreValuesBlock: Block = {
  slug: 'coreValues',
  labels: {
    singular: 'Core Values Section',
    plural: 'Core Values Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'WHY STUDY MIND',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Core Values And Ethos',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Values',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'founder',
      type: 'group',
      label: 'Founder Details',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          defaultValue:
            'Unlock your full potential with our innovative EdTech solutions. From interactive study tools to AI-powered learning aids, we make studying smarter, easier, and more engaging for students everywhere!',
        },
        {
          name: 'name',
          type: 'text',
          defaultValue: 'Dr. Mohil Shah',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'FOUNDER STUDY MIND',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Founder Image',
        },
      ],
    },
    {
      name: 'values',
      type: 'array',
      label: 'Core Values List',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Shield (Integrity)', value: 'shield' },
            { label: 'Lightbulb (Innovation)', value: 'lightbulb' },
            { label: 'Users (Community)', value: 'users' },
            { label: 'Trophy (Excellence)', value: 'trophy' },
          ],
          defaultValue: 'shield',
          required: true,
        },
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
      ],
    },
  ],
}
