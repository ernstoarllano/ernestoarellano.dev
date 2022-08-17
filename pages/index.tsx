import About from 'components/about/Intro'
import Timeline from 'components/experience/Timeline'
import Header from 'components/Header'
import Hero from 'components/Hero'
import { jobs } from 'data/jobs'
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
      <main className="lg:space-y-64">
        <About content={content} />
        <Timeline jobs={jobs} />
      </main>
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
