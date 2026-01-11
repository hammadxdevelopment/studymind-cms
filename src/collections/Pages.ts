import { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { FAQBlock } from '../blocks/FAQBlock'
import { MethodsBlock } from '../blocks/MethodsBlock'
import { EnquiryBlock } from '../blocks/EnquiryBlock'
import { TrustedBlock } from '../blocks/TrustedBlock'
import { PartnersBlock } from '../blocks/PartnersBlock'
import { ServicesBlock } from '../blocks/ServicesBlock'
import { CurriculumBlock } from '../blocks/CurriculumBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { CoreValuesBlock } from '../blocks/CoreValuesBlock'
import { ContactSupportBlock } from '../blocks/ContactSupportBlock'
import { TrustedByBlock } from '../blocks/TrustedByBlock'
import { OurStoryBlock } from '../blocks/OurStoryBlock'
import { AboutValuesBlock } from '../blocks/AboutValuesBlock'
import { LeadershipBlock } from '../blocks/LeadershipBlock'
import { SpecificSolutionsBlock } from '../blocks/SpecificSolutionsBlock'
import { SpecificNeedHelpBlock } from '../blocks/SpecificNeedHelpBlock'
import { SpecificWayWeWorkBlock } from '../blocks/SpecificWayWeWorkBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        HeroBlock,
        FAQBlock,
        MethodsBlock,
        EnquiryBlock,
        TrustedBlock,
        PartnersBlock,
        ServicesBlock,
        CurriculumBlock,
        TestimonialsBlock,
        CoreValuesBlock,
        ContactSupportBlock,
        TrustedByBlock,
        OurStoryBlock,
        AboutValuesBlock,
        LeadershipBlock,
        SpecificSolutionsBlock,
        SpecificNeedHelpBlock,
        SpecificWayWeWorkBlock,
      ],
    },
  ],
}
