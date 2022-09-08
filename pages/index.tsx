import About from 'components/about/Intro'
import Resume from 'components/about/Resume'
import Projects from 'components/builds/Projects'
import Timeline from 'components/experience/Timeline'
import Footer from 'components/Footer'
import Header from 'components/header/Header'
import Hero from 'components/Hero'
import Profiles from 'components/social/Profiles'
import { jobs } from 'data/jobs'
import { profiles } from 'data/profiles'
import { useWindowSize } from 'hooks/useWindowSize'
import { HomePageProps } from 'interfaces/interfaces'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPage } from 'services/getPage'
import { getProjects } from 'services/getProjects'

const HomePage = ({ content, projects }: HomePageProps) => {
  const { width } = useWindowSize()
  const isDesktop = width >= 1024

  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <Header />
      <Hero />
      <main className="space-y-24 lg:space-y-48">
        <About content={content} />
        <Timeline jobs={jobs} />
        <Projects projects={projects} />
        <Footer />
      </main>
      <Profiles profiles={profiles} />
      {isDesktop && <Resume />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { content } = await getPage(1)
    const { projects } = await getProjects()

    return {
      props: {
        content,
        projects,
      },
      revalidate: 43200,
    }
  } catch (err) {
    throw err
  }
}

export default HomePage
