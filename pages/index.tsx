import About from 'components/About'
import Blog from 'components/Blog'
import LeftColumn from 'components/LeftColumn'
import Repos from 'components/Repos'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import Spotify from 'components/Spotify'
import { useSong } from 'hooks/useSong'
import { HomePageProps } from 'interfaces/Page'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPage } from 'services/getPage'
import { getPosts } from 'services/getPosts'
import { getRepos } from 'services/getRepos'

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
            <About content={content} />
            <Social />
            <Spotify song={playing} />
          </LeftColumn>
          <RightColumn>
            <Repos repos={repos} />
            <Blog posts={posts} />
          </RightColumn>
        </div>
      </main>
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
