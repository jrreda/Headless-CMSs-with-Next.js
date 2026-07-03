import Image from 'next/image'
import Particles from './particles'
import { contentfulClient } from '@/lib/contentful'

export const dynamic = 'force-dynamic'

type ContentfulAsset = {
  fields: {
    title: string
    file: {
      url: string
      details?: {
        image?: {
          width: number
          height: number
        }
      }
    }
  }
}

type ClientLogo = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

function mapAssetToLogo(asset: ContentfulAsset): ClientLogo | null {
  const file = asset.fields?.file
  if (!file?.url) return null

  const title = asset.fields.title
  const width = file.details?.image?.width ?? 110
  const height = file.details?.image?.height ?? 30

  return {
    src: file.url.startsWith('//') ? `https:${file.url}` : file.url,
    alt: title,
    width,
    height,
  }
}

async function getClientLogos(): Promise<ClientLogo[]> {
  try {
    const response = await contentfulClient.getAssets({ limit: 100 })

    return response.items
      .filter((asset) => asset.fields?.title?.startsWith('client-'))
      .map((asset) => mapAssetToLogo(asset as ContentfulAsset))
      .filter((logo): logo is ClientLogo => logo !== null)
  } catch (error) {
    console.error('Error fetching client logos from Contentful:', error)
    return []
  }
}

export default async function Clients() {
  const clients = await getClientLogos()

  if (clients.length === 0) return null

  return (
    <section>
      <div className="relative mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Particles animation */}
        <div className="absolute inset-0 mx-auto px-4 sm:px-6 max-w-6xl">
          <Particles className="-z-10 absolute inset-0" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="group after:left-auto before:z-10 after:z-10 before:absolute after:absolute relative before:inset-0 after:inset-0 before:bg-gradient-to-r after:bg-gradient-to-l before:from-slate-900 after:from-slate-900 before:w-32 after:w-32 before:pointer-events-none after:pointer-events-none">
              <div className="flex items-center w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
                {[0, 1].map((set) => (
                  <div
                    key={set}
                    className="flex items-center shrink-0"
                    aria-hidden={set === 1}
                  >
                    {clients.map((client) => (
                      <div key={`${set}-${client.alt}`} className="mx-8 shrink-0">
                        <Image
                          src={client.src}
                          alt={client.alt}
                          width={client.width}
                          height={client.height}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
