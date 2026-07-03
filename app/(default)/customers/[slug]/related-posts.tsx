import Link from 'next/link'
import Image from 'next/image'

import CustomerImg02 from '@/public/images/customer-02.svg'
import CustomerBg02 from '@/public/images/customer-bg-02.png'
import CustomerImg03 from '@/public/images/customer-03.svg'
import CustomerBg03 from '@/public/images/customer-bg-03.png'
import CustomerImg06 from '@/public/images/customer-06.svg'
import CustomerBg06 from '@/public/images/customer-bg-06.png'
import Particles from '@/components/particles'
import Highlighter, { HighlighterItem02 } from '@/components/highlighter'

export default function RelatedPosts() {

  const items = [
    {
      name: 'Customer name',
      img: CustomerImg02,
      bg: CustomerBg02,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg03,
      bg: CustomerBg03,
      link: '/customers/single-post',
    },
    {
      name: 'Customer name',
      img: CustomerImg06,
      bg: CustomerBg06,
      link: '/customers/single-post',
    },
  ]

  return (
    <aside>
      <h2 className="inline-flex bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8 font-bold text-transparent text-lg">Related stories</h2>
      <div className="mx-auto sm:max-w-[728px] lg:max-w-none">
        <Highlighter className="group gap-4 lg:gap-6 grid sm:grid-cols-3 lg:grid-cols-3">

          {items.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <HighlighterItem02>
                  <div className="z-20 relative bg-slate-900 rounded-[inherit] h-full overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="-z-10 absolute inset-0" quantity={3} />
                    <div className="flex justify-center items-center h-32 lg:h-36">
                      <Image className="w-full h-full object-cover aspect-video" src={item.bg} width={352} height={198} alt="Customer Background" aria-hidden="true" />
                      <Image className="absolute" src={item.img} alt={item.name} />
                    </div>
                  </div>
                </HighlighterItem02>
              </Link>
            </div>
          ))}

        </Highlighter>
      </div>
    </aside>
  )
}
