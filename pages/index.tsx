import About from 'components/About'
import Blog from 'components/Blog'
import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import { getPage, getPosts } from 'graphql/queries'
import { getHTML } from 'helpers/getHTML'
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

const Home = ({ repos, posts, content }: HomeProps) => {
  const { playing } = useSong()

  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <main>
        <div className="relative w-full max-w-[1400px] mx-auto">
          <LeftColumn>
            <Suspense fallback="Loading">
              <About content={content.value} />
            </Suspense>
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
    const {
      data: { page },
    } = await strapi.query({
      query: getPage,
      variables: { id: 1 },
    })
    const repos = await getRepos()
    const {
      data: { blogs },
    } = await strapi.query({ query: getPosts })
    const posts = blogs.data
    const pageContent = await getHTML(page.data.attributes.Body)

    return {
      props: {
        repos,
        posts,
        content: {
          ...pageContent,
        },
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
