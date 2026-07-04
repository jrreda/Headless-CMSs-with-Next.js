import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Document } from '@contentful/rich-text-types'
import Particles from '@/components/particles'
import RichText from '@/components/rich-text'
import Illustration from '@/public/images/page-illustration.svg'
import RelatedPosts from './related-posts'
import { contentfulClient } from '@/lib/contentful'

export const dynamic = 'force-dynamic'

type ContentfulAsset = {
  fields?: {
    title?: string
    file?: {
      url?: string
      details?: {
        image?: {
          width?: number
          height?: number
        }
      }
    }
  }
}

type CustomerFields = {
  name: string
  logo?: ContentfulAsset
}

type CustomerPostFields = {
  title: string
  slug: string
  body: Document
  customer?: {
    fields?: CustomerFields
  }
}

function getAssetUrl(url?: string) {
  if (!url) return null
  return url.startsWith('//') ? `https:${url}` : url
}

async function getPost(slug: string): Promise<CustomerPostFields | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'customerPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    })

    return (response.items[0]?.fields as CustomerPostFields) ?? null
  } catch (error) {
    console.error('Error fetching customer post from Contentful:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  return {
    title: post ? `${post.title} - Stellar` : 'Customer Post - Stellar',
    description: post?.title ?? 'Page description',
  }
}

// slug: how-canon-leverages-stellar-x-to-onboard-new-hosts
export default async function CustomerPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const customer = post.customer?.fields
  const logoUrl = getAssetUrl(customer?.logo?.fields?.file?.url)
  const logoWidth = customer?.logo?.fields?.file?.details?.image?.width ?? 64
  const logoHeight = customer?.logo?.fields?.file?.details?.image?.height ?? 64

  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="top-0 left-1/2 -z-10 absolute flex justify-center items-center w-[800px] aspect-square -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-purple-500 opacity-30 blur-[120px] rounded-full translate-z-0"></div>
        <div className="absolute bg-purple-400 opacity-70 blur-[80px] rounded-full w-64 h-64 translate-z-0"></div>
      </div>

      {/* Particles animation */}
      <Particles className="-z-10 absolute inset-0 h-96" quantity={15} />

      {/* Illustration */}
      <div className="md:block left-1/2 -z-10 absolute opacity-90 blur-2xl -mt-16 -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

          <div className="md:flex md:justify-between">

            {/* Page content */}
            <div className="pb-12 md:pb-20 md:grow">
              <div className="max-w-3xl">

                <article className="mb-12 pb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                  <div className="mb-4">
                    <Link className="group inline-flex font-medium text-purple-500 text-sm" href="/customers"><span className="mr-1 tracking-normal transition-transform group-hover:-translate-x-0.5 duration-150 ease-in-out">&lt;-</span> Go Back</Link>
                  </div>

                  <header>
                    <h1 className="inline-flex bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-transparent h2">
                      {post.title}
                    </h1>
                  </header>

                  {/* Post content */}
                  <div className="prose-h2:mt-8 prose-h2:mb-4 prose-blockquote:xl:-ml-5 prose-blockquote:pl-5 prose-blockquote:border-purple-500 prose-blockquote:border-l-2 max-w-none prose-blockquote:font-medium text-slate-400 prose-a:text-purple-500 prose-blockquote:text-slate-300 prose-headings:text-slate-50 prose-strong:text-slate-50 prose-h2:text-xl hover:prose-a:underline prose-a:no-underline prose-blockquote:italic prose-p:leading-relaxed prose">
                    <RichText document={post.body} />
                  </div>
                </article>

                <RelatedPosts />

              </div>
            </div>

            {/* Sidebar */}
            {customer && (
              <aside className="md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20 md:w-64 lg:w-80 md:shrink-0">
                <div className="top-6 sticky md:pl-6 lg:pl-10">

                  <div className="space-y-6">
                    <div className="bg-gradient-to-tr from-slate-800 to-slate-800/25 border border-slate-800 rounded-3xl">
                      <div className="px-5 py-6">
                        <div className="mb-5">
                          <div className="flex items-center space-x-4">
                            {logoUrl && (
                              <Image
                                src={logoUrl}
                                width={logoWidth}
                                height={logoHeight}
                                alt={`${customer.name} logo`}
                              />
                            )}
                            <div className="font-semibold text-slate-100 text-lg">{customer.name}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </aside>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}
