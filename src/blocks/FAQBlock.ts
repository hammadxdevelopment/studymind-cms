import { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Frequently Asked Questions',
      label: 'Section Title',
    },
    {
      name: 'highlightedWord',
      type: 'text',
      defaultValue: 'Questions',
      label: 'Word to Highlight (Purple Box)',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      defaultValue:
        'Work experience programs for ages 15-18 in 15 industries. Pick your career path, then choose a Weekend Program or Summer Experience.',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'landing',
      options: [
        { label: 'White Background (Landing)', value: 'landing' },
        { label: 'Off-White Background (About/Contact)', value: 'about' },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      minRows: 1,
      defaultValue: [
        {
          id: 'academic',
          label: 'Academic excellence',
          questions: [
            {
              question: 'Who are the industry experts?',
              answer:
                'Blending practical knowledge, industry skills and project-based learning, Career Insights offers an exceptional environment experience. Learning from those at the forefront of their field, students receive industry feedback and personal career coaching to prepare them for an exciting future in the field.',
            },
            {
              question: 'Where should we ship?',
              answer:
                'For physical course materials, we ship globally. Standard shipping takes 5-7 business days, while expedited options are available for international students.',
            },
            {
              question: 'Why studymind?',
              answer:
                'Study Mind offers a unique combination of elite academic tuition, real-world work experience, and university admission support, all delivered by successful professionals in the field.',
            },
            {
              question: 'How to enroll in the courses',
              answer:
                'Enrollment is simple. Navigate to your desired course page, click "Apply Now," and fill out the application form. Our admissions team will review your profile within 48 hours.',
            },
            {
              question: 'How many courses are you offering?',
              answer:
                'We currently offer over 25 specialized courses across 15 different industries, ranging from Medicine and Engineering to Law and Investment Banking.',
            },
            {
              question: 'How to contact to the concern person?',
              answer:
                'We have a dedicated 24/7 support line for parents and students. Upon enrollment, you will be assigned a personal program coordinator who is your primary point of contact.',
            },
          ],
        },
        {
          id: 'beyond',
          label: 'Beyond classroom',
          questions: [
            {
              question: 'Where should we ship?',
              answer:
                'For physical course materials, we ship globally. Standard shipping takes 5-7 business days, while expedited options are available for international students.',
            },
            {
              question: 'Are there social activities included?',
              answer:
                'Yes! We organize weekend excursions, networking dinners, and cultural city tours to ensure students build lasting friendships outside of the classroom.',
            },
          ],
        },
        {
          id: 'safety',
          label: 'Safety & support',
          questions: [
            {
              question: 'How to contact to the concern person?',
              answer:
                'We have a dedicated 24/7 support line for parents and students. Upon enrollment, you will be assigned a personal program coordinator who is your primary point of contact.',
            },
            {
              question: 'What safety measures are in place?',
              answer:
                'Student safety is our top priority. We have 24-hour residential staff, secure accommodation access, and comprehensive risk assessments for all activities.',
            },
          ],
        },
        {
          id: 'why',
          label: 'Why Studymind?',
          questions: [
            {
              question: 'Why studymind?',
              answer:
                'Study Mind offers a unique combination of elite academic tuition, real-world work experience, and university admission support, all delivered by successful professionals in the field.',
            },
            {
              question: 'What is the success rate?',
              answer:
                'Over 92% of our students receive offers from their top-choice universities, including Oxford, Cambridge, and Ivy League institutions.',
            },
          ],
        },
      ],
      fields: [
        {
          name: 'id',
          type: 'select',
          label: 'Icon Type',
          required: true,
          options: [
            { label: 'Academic (Book)', value: 'academic' },
            { label: 'Beyond Classroom (Bus)', value: 'beyond' },
            { label: 'Safety (Shield)', value: 'safety' },
            { label: 'Why Studymind (Brain)', value: 'why' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          label: 'Tab Label',
          required: true,
        },
        {
          name: 'questions',
          type: 'array',
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
        },
      ],
    },
  ],
}
