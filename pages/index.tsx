import About from 'components/about/Intro'
import BlogLoading from 'components/blog/Fallback'
import Timeline from 'components/experience/Timeline'
import Footer from 'components/Footer'
import Repos from 'components/github/Repos'
import Header from 'components/header/Header'
import Hero from 'components/Hero'
import Profiles from 'components/social/Profiles'
import { jobs } from 'data/jobs'
import { profiles } from 'data/profiles'
import { HomePageProps } from 'interfaces/interfaces'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'
import { getPage } from 'services/getPage'
import { getPosts } from 'services/getPosts'
import { getRepos } from 'services/getRepos'

const Blog = dynamic(() => import('components/blog/Blog'), {
  suspense: true,
})

const HomePage = ({ content, repos, posts }: HomePageProps) => {
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
        <Repos repos={repos} />
        <Suspense fallback={<BlogLoading />}>
          <Blog posts={posts} />
        </Suspense>
        <Footer />
      </main>
      <Profiles profiles={profiles} />
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
