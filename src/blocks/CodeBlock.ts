// src/blocks/CodeBlock.ts (Ensure this exists and is correct)
import type { Block } from 'payload'

const CodeBlock: Block = {
  slug: 'codeBlock',
  labels: {
    singular: 'Code Snippet (Demo)',
    plural: 'Code Snippets',
  },
  fields: [
    {
      name: 'code',
      type: 'code',
      label: 'React Component Code',
      admin: {
        language: 'typescript',
      },
      required: true,
    },
  ],
}

export default CodeBlock
