import Link from 'next/link'

import { Button } from '@/components/ui/button'

/**
 * Component for displaying the intro
 *
 * @returns {React.ReactElement} The intro component
 */
export function Intro() {
  return (
    <section className="flex flex-col h-screen">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto mt-auto mb-0 pb-32">
        <div className="w-full max-w-3xl space-y-6">
          <h1 className="font-premier-league-bold text-9xl tracking-tighter">
            ¡Hola! <span className="inline-block animate-wave">👋🏻</span>
          </h1>
          <p className="text-lg font-light">
            I&apos;m Ernesto Arellano, a front-end engineer based in Flagstaff,
            AZ. While I&apos;m deeply passionate about software development,
            self-improvement, and the beauty of the outdoors, I&apos;m also an
            avid Liverpool F.C. supporter. Currently, my focus is on
            contributing to Dispel&apos;s mission of enhancing remote access to
            operational technology.
          </p>
        </div>
        <div className="lg:flex lg:flex-col lg:self-end space-y-3">
          <Button
            className="underline bg-transparent hover-bg-transparent"
            asChild
          >
            <Link href="#projects">Featured Work</Link>
          </Button>
          <Button className="bg-transparent rounded-full" variant="outline">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
