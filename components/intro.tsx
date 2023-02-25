'use client'

import Image from 'next/image'

import { useElementOnScreen } from '@/hooks/useElementOnScreen'
import { cn } from '@/utils/styles'

export default function Intro() {
  const { ref, isVisible } = useElementOnScreen()

  const imageActiveClasses = cn({
    'lg:after:w-full lg:before:h-full after:border-dawn before:border-dawn':
      isVisible,
  })

  const titleActiveClasses = cn({
    'after:w-[300px] after:bg-sandstone': isVisible,
  })

  return (
    <section id="about" className="scroll-m-8" ref={ref}>
      <div className="w-full lg:max-w-[800px] xl:max-w-[900px] lg:mx-auto space-y-8 lg:space-y-24">
        <h3
          className={cn(
            `flex items-center text-sm tracking-widest after:content-[''] after:block after:w-0 after:h-[2px] after:ml-6 after:bg-transparent after:transition-all after:duration-700`,
            titleActiveClasses
          )}
        >
          <span className="mr-2 text-sandstone">01.</span>About
        </h3>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="leading-relaxed space-y-6">
              <p>
                {`Well hello there! My name is Ernesto and I enjoy creating things
                for the web. I first got into web development back in 2011 when
                I started messing around with HTML & CSS. Soon after that I
                found myself as an intern learning about other things like PHP,
                jQuery and plenty more.`}
              </p>
              <p>
                {`Fast forward 10 years and I am still as excited about learning
                new technologies as when I first started learning about web
                development.`}
              </p>
              <p>{`Below are a few technologies I'm currently working with:`}</p>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              <li className="font-bold">TypeScript</li>
              <li className="font-bold">JavaScript (ES6)</li>
              <li className="font-bold">React</li>
              <li className="font-bold">Next.js</li>
              <li className="font-bold">Storybook</li>
              <li className="font-bold">Jest</li>
              <li className="font-bold">Prisma</li>
            </ul>
          </div>
          <div
            className={cn(
              `lg:col-span-5 lg:self-start relative bg-dawn lg:after:content-[''] lg:after:block lg:after:absolute lg:after:-bottom-[20px] lg:after:-right-[20px] lg:after:w-0 lg:after:border-r-2 lg:after:border-b-2 lg:after:border-solid lg:after:border-sandstone lg:after:transition-all lg:after:duration-700 lg:before:content-[''] lg:before:block lg:before:absolute lg:before:-bottom-[20px] lg:before:-right-[20px] lg:before:h-0 lg:before:border-r-2 lg:before:border-b-2 lg:before:border-solid lg:before:border-sandstone lg:before:transition-all lg:before:duration-700`,
              imageActiveClasses
            )}
          >
            <Image
              className="w-full mix-blend-multiply grayscale"
              src="/ernesto.jpg"
              alt="Ernesto Arellano"
              width={337}
              height={337}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
