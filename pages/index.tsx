import LeftColumn from 'components/LeftColumn'
import AboutLoading from 'components/loading/About'
import BlogLoading from 'components/loading/Blog'
import ReposLoading from 'components/loading/Repos'
import SpotifyLoading from 'components/loading/Spotify'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import { useSong } from 'hooks/useSong'
import { HomePageProps } from 'interfaces/Page'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'
import { getPage } from 'services/getPage'
import { getPosts } from 'services/getPosts'
import { getRepos } from 'services/getRepos'

const About = dynamic(() => import('components/About'), { suspense: true })
const Spotify = dynamic(() => import('components/Spotify'), { suspense: true })
const Repos = dynamic(() => import('components/Repos'), { suspense: true })
const Blog = dynamic(() => import('components/Blog'), { suspense: true })

const HomePage = ({ content, repos, posts }: HomePageProps) => {
  const { playing } = useSong()

  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <main>
        <div className="relative w-full max-w-[1400px] mx-auto">
          <LeftColumn>
            <Suspense fallback={<AboutLoading />}>
              <About content={content} />
            </Suspense>
            <Social />
            <Suspense fallback={<SpotifyLoading />}>
              <Spotify song={playing} />
            </Suspense>
          </LeftColumn>
          <RightColumn>
            <Suspense fallback={<ReposLoading />}>
              <Repos repos={repos} />
            </Suspense>
            <Suspense fallback={<BlogLoading />}>
              <Blog posts={posts} />
            </Suspense>
          </RightColumn>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { content } = await getPage(1)
  const { repos } = await getRepos()
  const { posts } = await getPosts()

  return {
    props: {
      content,
      repos,
      posts,
    },
  }
}

export default HomePage
