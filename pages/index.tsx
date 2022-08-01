import About from 'components/About'
import Blog from 'components/Blog'
import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import { getPosts } from 'graphql/queries'
import { useSong } from 'hooks/useSong'
import { HomeProps } from 'interfaces/Page'
import { strapi } from 'lib/strapi'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'
import { getRepos } from 'services/getRepos'

const Spotify = dynamic(() => import('components/Spotify'), { suspense: true })
const Repos = dynamic(() => import('components/Repos'), { suspense: true })

const Home = ({ repos, posts }: HomeProps) => {
  const { playing } = useSong()

  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <main>
        <div className="relative w-full max-w-[1400px] mx-auto">
          <LeftColumn>
            <About />
            <Social />
            <Suspense fallback="Loading">
              <Spotify song={playing} />
            </Suspense>
          </LeftColumn>
          <RightColumn>
            <Suspense fallback="Loading">
              <Repos data={repos} />
            </Suspense>
            <Suspense fallback="Loading">
              <Blog posts={posts} />
            </Suspense>
          </RightColumn>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const repos = await getRepos()
    const {
      data: { blogs },
    } = await strapi.query({ query: getPosts })
    const posts = blogs.data

    return {
      props: {
        repos,
        posts,
      },
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}

export default Home
