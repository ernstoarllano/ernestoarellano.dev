import About from 'components/about/Intro'
import Resume from 'components/about/Resume'
import Timeline from 'components/experience/Timeline'
import Repos from 'components/github/Repos'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Profiles from 'components/social/Profiles'
import { jobs } from 'data/jobs'
import { profiles } from 'data/profiles'
import { HomePageProps } from 'interfaces/Page'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPage } from 'services/getPage'
import { getPosts } from 'services/getPosts'
import { getRepos } from 'services/getRepos'

const HomePage = ({ content, repos, posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <Header />
      <Hero />
      <main className="lg:space-y-48">
        <About content={content} />
        <Timeline jobs={jobs} />
        <Repos repos={repos} />
      </main>
      <Profiles profiles={profiles} />
      <Resume />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fetchContent = await getPage(1)
    const fetchedRepos = await getRepos()
    const fetchedPosts = await getPosts()

    return {
      props: {
        content: fetchContent?.content,
        repos: fetchedRepos?.repos,
        posts: fetchedPosts?.posts,
      },
      revalidate: 43200,
    }
  } catch (err) {
    throw err
  }
}

export default HomePage
