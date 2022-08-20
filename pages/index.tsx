import About from 'components/about/Intro'
import Resume from 'components/about/Resume'
import Blog from 'components/blog/Blog'
import Timeline from 'components/experience/Timeline'
import Footer from 'components/Footer'
import Repos from 'components/github/Repos'
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
import { getPosts } from 'services/getPosts'
import { getRepos } from 'services/getRepos'
import useSWR from 'swr'
import { fetcher } from 'utils/fetcher'

const HomePage = ({ content, repos, posts }: HomePageProps) => {
  const { data: fetchedContent } = useSWR('/api/page/1', fetcher, {
    fallbackData: content,
  })
  const { data: fetchedRepos } = useSWR('/api/repos', fetcher, {
    fallbackData: repos,
  })
  const { data: fetchedPosts } = useSWR('/api/posts', fetcher, {
    fallbackData: posts,
  })

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
        <About content={fetchedContent} />
        <Timeline jobs={jobs} />
        <Repos repos={fetchedRepos} />
        <Blog posts={fetchedPosts} />
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
    const { repos } = await getRepos()
    const { posts } = await getPosts()

    return {
      props: {
        content,
        repos,
        posts,
      },
      revalidate: 43200,
    }
  } catch (err) {
    throw err
  }
}

export default HomePage
