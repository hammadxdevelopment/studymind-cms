import { Block } from 'payload'

export const OurStoryBlock: Block = {
  slug: 'ourStory',
  labels: {
    singular: 'Our Story Section',
    plural: 'Our Story Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Built on a Passion for Learning',
      label: 'Small Label (Eyebrow)',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Story',
      label: 'Main Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Story',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Story Paragraphs',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'mission',
      type: 'group',
      label: 'Mission Card Details',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Our mission',
        },
        {
          name: 'statement',
          type: 'textarea',
          defaultValue:
            "Empowering students to learn, grow, and shape their own futures that's what drives us every day.",
        },
        {
          name: 'image1',
          type: 'upload',
          relationTo: 'media',
          label: 'Top Left Image (Learn)',
          required: true,
        },
        {
          name: 'image2',
          type: 'upload',
          relationTo: 'media',
          label: 'Top Right Image (Grow)',
          required: true,
        },
        {
          name: 'image3',
          type: 'upload',
          relationTo: 'media',
          label: 'Bottom Image (Shape)',
          required: true,
        },
      ],
    },
  ],
}
