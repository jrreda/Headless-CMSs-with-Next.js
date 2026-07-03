'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'

import CarouselImg01 from '@/public/images/carousel-icon-01.svg'
import CarouselImg02 from '@/public/images/carousel-icon-02.svg'
import CarouselImg03 from '@/public/images/carousel-icon-03.svg'
import CarouselImg04 from '@/public/images/carousel-icon-04.svg'
import CarouselImg05 from '@/public/images/carousel-icon-05.svg'

// Import Swiper
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function TestimonialsCarousel() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.stellar-carousel', {
      modules: [Navigation],
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="mx-auto pb-12 md:pb-20 max-w-3xl text-center">
            <div>
              <div className="inline-flex bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200 pb-3 font-medium text-transparent">The security first platform</div>
            </div>
            <h2 className="bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-transparent h2">Spot issues faster</h2>
            <p className="text-slate-400 text-lg">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="before:z-20 after:z-20 before:absolute after:absolute relative before:inset-0 after:inset-0 before:bg-gradient-to-l after:bg-gradient-to-r before:from-transparent after:from-transparent before:to-20% before:to-slate-900 after:to-20% after:to-slate-900 before:-translate-x-full after:translate-x-full">
            <div className="group stellar-carousel swiper-container">
              <Highlighter className="w-fit swiper-wrapper" refresh={swiperInitialized}>
                {/* Carousel items */}
                <HighlighterItem className="group/slide h-auto swiper-slide">
                  <div className="z-20 relative bg-slate-900 rounded-[inherit] h-full overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="-z-10 absolute inset-0 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} /> 
                    {/* Radial gradient */}
                    <div className="bottom-0 left-1/2 -z-10 absolute w-1/3 aspect-square -translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true">
                      <div className="absolute inset-0 bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 blur-[60px] rounded-full transition-colors translate-z-0 duration-500 ease-in-out" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg01} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="mb-1 font-bold text-lg">Anonymous User</div>
                        <div className="mb-3 text-slate-400">Incorporate rich user profiling, and facilitate more transactions.</div>
                      </div>
                      <div className="text-right">
                        <a className="group inline-flex items-center font-medium text-slate-300 hover:text-white text-sm transition duration-150 ease-in-out" href="#0">Learn More <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">-&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="group/slide h-auto swiper-slide">
                  <div className="z-20 relative bg-slate-900 rounded-[inherit] h-full overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="-z-10 absolute inset-0 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    {/* Radial gradient */}
                    <div className="bottom-0 left-1/2 -z-10 absolute w-1/3 aspect-square -translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true">
                      <div className="absolute inset-0 bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 blur-[60px] rounded-full transition-colors translate-z-0 duration-500 ease-in-out" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg02} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="mb-1 font-bold text-lg">Bot Detection</div>
                        <div className="mb-3 text-slate-400">Incorporate rich user profiling, and facilitate more transactions.</div>
                      </div>
                      <div className="text-right">
                        <a className="group inline-flex items-center font-medium text-slate-300 hover:text-white text-sm transition duration-150 ease-in-out" href="#0">Learn More <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">-&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="group/slide h-auto swiper-slide">
                  <div className="z-20 relative bg-slate-900 rounded-[inherit] h-full overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="-z-10 absolute inset-0 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    {/* Radial gradient */}
                    <div className="bottom-0 left-1/2 -z-10 absolute w-1/3 aspect-square -translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true">
                      <div className="absolute inset-0 bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 blur-[60px] rounded-full transition-colors translate-z-0 duration-500 ease-in-out" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg03} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="mb-1 font-bold text-lg">Social integrations</div>
                        <div className="mb-3 text-slate-400">Incorporate rich user profiling, and facilitate more transactions.</div>
                      </div>
                      <div className="text-right">
                        <a className="group inline-flex items-center font-medium text-slate-300 hover:text-white text-sm transition duration-150 ease-in-out" href="#0">Learn More <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">-&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="group/slide h-auto swiper-slide">
                  <div className="z-20 relative bg-slate-900 rounded-[inherit] h-full overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="-z-10 absolute inset-0 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    {/* Radial gradient */}
                    <div className="bottom-0 left-1/2 -z-10 absolute w-1/3 aspect-square -translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true">
                      <div className="absolute inset-0 bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 blur-[60px] rounded-full transition-colors translate-z-0 duration-500 ease-in-out" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg04} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="mb-1 font-bold text-lg">Progressive Profiling</div>
                        <div className="mb-3 text-slate-400">Incorporate rich user profiling, and facilitate more transactions.</div>
                      </div>
                      <div className="text-right">
                        <a className="group inline-flex items-center font-medium text-slate-300 hover:text-white text-sm transition duration-150 ease-in-out" href="#0">Learn More <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">-&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="group/slide h-auto swiper-slide">
                  <div className="z-20 relative bg-slate-900 rounded-[inherit] h-full overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="-z-10 absolute inset-0 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    {/* Radial gradient */}
                    <div className="bottom-0 left-1/2 -z-10 absolute w-1/3 aspect-square -translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true">
                      <div className="absolute inset-0 bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 blur-[60px] rounded-full transition-colors translate-z-0 duration-500 ease-in-out" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg05} width={56} height={56} alt="Icon 05" />
                      <div className="grow">
                        <div className="mb-1 font-bold text-lg">Secure Access</div>
                        <div className="mb-3 text-slate-400">Incorporate rich user profiling, and facilitate more transactions.</div>
                      </div>
                      <div className="text-right">
                        <a className="group inline-flex items-center font-medium text-slate-300 hover:text-white text-sm transition duration-150 ease-in-out" href="#0">Learn More <span className="ml-1 text-purple-500 tracking-normal transition-transform group-hover:translate-x-0.5 duration-150 ease-in-out">-&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-end mt-8">
            <button className="group z-20 relative flex justify-center items-center w-12 h-12 carousel-prev">
              <span className="sr-only">Previous</span>
              <svg className="fill-slate-500 group-hover:fill-purple-500 w-4 h-4 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="group z-20 relative flex justify-center items-center w-12 h-12 carousel-next">
              <span className="sr-only">Next</span>
              <svg className="fill-slate-500 group-hover:fill-purple-500 w-4 h-4 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}