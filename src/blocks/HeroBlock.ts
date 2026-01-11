import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'landing',
      options: [
        { label: 'Landing Page Style', value: 'landing' },
        { label: 'About Us Style', value: 'about' },
        { label: 'Contact Us Style', value: 'contact' },
        { label: 'AP Specific Style', value: 'specific' },
      ],
      required: true,
    },
    // --- Landing Page Fields ---
    {
      name: 'landingFields',
      type: 'group',
      label: 'Landing Page Content',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'landing',
      },
      fields: [
        {
          name: 'mainTitle',
          type: 'text',
          required: true,
          defaultValue: 'Transforming educational outcomes for vulnerable young communities',
        },
        { name: 'highlightedTitle', type: 'text', required: true, defaultValue: 'educational' },
        { name: 'subText', type: 'textarea', required: true },
        {
          name: 'badge',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', defaultValue: 'Official UK Government Partner' },
            { name: 'icon', type: 'upload', relationTo: 'media', label: 'Badge Icon' },
          ],
        },
        {
          name: 'buttons',
          type: 'group',
          fields: [
            { name: 'contactText', type: 'text', defaultValue: 'Contact us' },
            { name: 'servicesText', type: 'text', defaultValue: 'View Services' },
          ],
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Floating Cards',
          minRows: 4,
          maxRows: 4,
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
          ],
        },
        {
          name: 'logosImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Scrolling Logos Image',
        },
      ],
    },
    // --- About Page Fields ---
    {
      name: 'aboutFields',
      type: 'group',
      admin: { condition: (_, siblingData) => siblingData.type === 'about' },
      fields: [
        {
          name: 'badge',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', defaultValue: 'Official UK Government Partner' },
            { name: 'icon', type: 'upload', relationTo: 'media', label: 'Badge Icon' },
          ],
        },
        { name: 'heading', type: 'text', label: 'Highlighted Heading (e.g. Study Mind)' },
        { name: 'subHeading', type: 'textarea', label: 'Bold Intro Text' },
        { name: 'additionalText', type: 'textarea', label: 'Long Description Paragraph' },
        { name: 'description', type: 'textarea', label: 'Bottom Centered Text' },
        { name: 'video', type: 'upload', relationTo: 'media', label: 'Video Cover Image' },
      ],
    },
    // --- Contact Page Fields ---
    {
      name: 'contactFields',
      type: 'group',
      label: 'Contact Page Content',
      admin: { condition: (_, siblingData) => siblingData.type === 'contact' },
      fields: [
        {
          name: 'titlePart1',
          type: 'text',
          label: 'Title Part 1 (Mobile Line 1)',
          defaultValue: 'Get in touch with',
        },
        {
          name: 'titlePart2',
          type: 'text',
          label: 'Title Part 2 (Mobile Line 2)',
          defaultValue: 'our Team',
        },
        {
          name: 'highlightedWord',
          type: 'text',
          label: 'Word to Highlight (Must exist in Title)',
          defaultValue: 'Team',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Header Description',
          defaultValue:
            'We’d love to hear from you! Whether you have a question, need support, or want to explore collaboration, our team is here to help.',
        },
        {
          name: 'introText',
          type: 'textarea',
          label: 'Card Intro Text',
          defaultValue:
            'Our team is dedicated to assisting you with any queries. Simply drop us a message, and we’ll get back to you within the same day.',
        },
        {
          name: 'founderQuote',
          type: 'textarea',
          label: 'Founder Quote',
          defaultValue: 'Unlock your full potential with our innovative EdTech solutions...',
        },
        { name: 'founderName', type: 'text', defaultValue: 'Dr. Mohil Shah' },
        { name: 'founderRole', type: 'text', defaultValue: 'FOUNDER STUDY MIND' },
        { name: 'founderImage', type: 'upload', relationTo: 'media', label: 'Founder Image' },
        {
          name: 'images',
          type: 'group',
          label: 'Decorative Floating Images',
          fields: [
            { name: 'image1', type: 'upload', relationTo: 'media', label: 'Top Left (Sofia)' },
            { name: 'image2', type: 'upload', relationTo: 'media', label: 'Bottom Left (Anya)' },
            { name: 'image3', type: 'upload', relationTo: 'media', label: 'Top Right (Omar)' },
            { name: 'image4', type: 'upload', relationTo: 'media', label: 'Bottom Right (Ben)' },
          ],
        },
      ],
    },
    // --- AP Specific Fields ---
    {
      name: 'specificFields',
      type: 'group',
      label: 'AP Specific Content',
      admin: { condition: (_, siblingData) => siblingData.type === 'specific' },
      fields: [
        {
          name: 'badge',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', defaultValue: 'Official UK Government Partner' },
            { name: 'icon', type: 'upload', relationTo: 'media', label: 'Badge Icon' },
          ],
        },
        { name: 'mainTitle', type: 'text', defaultValue: 'Smarter Learning Solutions for' },
        { name: 'highlightedWord', type: 'text', defaultValue: 'Schools' },
        { name: 'subText', type: 'textarea', label: 'Bold Intro Text' },
        { name: 'description', type: 'textarea', label: 'Long Description Paragraph' },
        { name: 'mainImage', type: 'upload', relationTo: 'media', label: 'Main Hero Image' },
        {
          name: 'stat1',
          type: 'group',
          label: 'Top Stat Card (Purple)',
          fields: [
            { name: 'value', type: 'text', defaultValue: '93%' },
            {
              name: 'description',
              type: 'textarea',
              defaultValue: 'of our students say they have gained more confidence learning with us',
            },
          ],
        },
        {
          name: 'stat2',
          type: 'group',
          label: 'Bottom Stat Card (Blue)',
          fields: [
            { name: 'value', type: 'text', defaultValue: '5,000+' },
            {
              name: 'description',
              type: 'textarea',
              defaultValue: 'students have been supported with StudyMind and growing!',
            },
          ],
        },
      ],
    },
    {
      name: 'customTitle',
      type: 'text',
      admin: { condition: (_, siblingData) => false },
    },
  ],
}
