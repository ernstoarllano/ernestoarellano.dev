import About from 'components/About'
import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import { useSong } from 'hooks/useSong'
import { HomeProps } from 'interfaces/Home'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'
import { getRepos } from 'services/getRepos'

const Spotify = dynamic(() => import('components/Spotify'), { suspense: true })
const Repos = dynamic(() => import('components/Repos'), { suspense: true })

const Home = ({ repos }: HomeProps) => {
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
          </RightColumn>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const repos = await getRepos()

    return {
      props: {
        repos,
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
