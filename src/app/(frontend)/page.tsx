import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import type { Page } from '@/payload-types'
import Hero from '@/components/Hero/Hero'
import config from '@/payload.config'
import './styles.css'

const blockMap = {
  heroBlock: Hero,
}

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let homePage: Page | null = null
  try {
    const data = await payload.find({
      collection: 'pages' as 'pages',
      limit: 1,
      draft: true,
      where: {
        slug: {
          equals: 'home',
        },
      },
    })

    if (data.docs.length > 0) {
      homePage = data.docs[0] as Page
    }
  } catch (error) {
    console.error('Error fetching home page:', error)
  }

  const { user } = await payload.auth({ headers })

  const layout = homePage?.layout || []

  return (
    <main>
      <section className="cms-content">
        {layout.map((block, index) => {
          if (!('blockType' in block)) return null

          const Component = blockMap[block.blockType as keyof typeof blockMap]

          if (Component) {
            return <Component key={index} {...(block as any)} />
          }

          return (
            <p key={index} style={{ color: 'red', padding: '10px' }}>
              Warning: Block type '{block.blockType}' not mapped.
            </p>
          )
        })}
      </section>
    </main>
  )
}
