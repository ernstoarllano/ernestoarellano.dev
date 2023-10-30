import { Experience } from '@/components/experience'
import { Intro } from '@/components/intro'
import { Projects } from '@/components/projects'

/**
 * Component for the home page.
 *
 * @returns {React.ReactElement} The component
 */
export default function HomePage() {
  return (
    <>
      <Intro />
      <Experience />
      <Projects />
    </>
  )
}
