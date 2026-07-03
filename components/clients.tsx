import Image from 'next/image'
import Particles from './particles'

import Client01 from '@/public/images/client-01.svg'
import Client02 from '@/public/images/client-02.svg'
import Client03 from '@/public/images/client-03.svg'
import Client04 from '@/public/images/client-04.svg'
import Client05 from '@/public/images/client-05.svg'
import Client06 from '@/public/images/client-06.svg'
import Client07 from '@/public/images/client-07.svg'
import Client08 from '@/public/images/client-08.svg'
import Client09 from '@/public/images/client-09.svg'

const clients = [
  { src: Client01, alt: 'Client 01', width: 110, height: 21 },
  { src: Client02, alt: 'Client 02', width: 70, height: 25 },
  { src: Client03, alt: 'Client 03', width: 107, height: 33, className: 'mt-1' },
  { src: Client04, alt: 'Client 04', width: 85, height: 36 },
  { src: Client05, alt: 'Client 05', width: 86, height: 18 },
  { src: Client06, alt: 'Client 06', width: 78, height: 34 },
  { src: Client07, alt: 'Client 07', width: 83, height: 23 },
  { src: Client08, alt: 'Client 08', width: 98, height: 26 },
  { src: Client09, alt: 'Client 09', width: 92, height: 28, className: 'mt-2' },
]

export default function Clients() {
  return (
    <section>
      <div className="relative mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Particles animation */}
        <div className="absolute inset-0 mx-auto px-4 sm:px-6 max-w-6xl">
          <Particles className="-z-10 absolute inset-0" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Marquee built with Tailwind CSS animation */}
            <div className="after:left-auto before:z-10 after:z-10 before:absolute after:absolute relative before:inset-0 after:inset-0 before:bg-gradient-to-r after:bg-gradient-to-l before:from-slate-900 after:from-slate-900 before:w-32 after:w-32 before:pointer-events-none after:pointer-events-none group">
              <div className="flex items-center w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {/* Two identical sets create a seamless loop */}
                {[0, 1].map((set) => (
                  <div
                    key={set}
                    className="flex items-center shrink-0"
                    aria-hidden={set === 1}
                  >
                    {clients.map((client) => (
                      <div key={client.alt} className="mx-8 shrink-0">
                        <Image
                          className={client.className}
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
