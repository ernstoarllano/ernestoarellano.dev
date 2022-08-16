import About from 'components/About'
import Repos from 'components/github/Repos'
import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import { HomePageProps } from 'interfaces/Page'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPage } from 'services/getPage'
import { getRepos } from 'services/getRepos'

const HomePage = ({ content, repos }: HomePageProps) => {
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
          </LeftColumn>
          <RightColumn>
            <Repos repos={repos} />
          </RightColumn>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fetchContent = await getPage(1)
    const fetchedRepos = await getRepos()

    return {
      props: {
        content: fetchContent?.content,
        repos: fetchedRepos?.repos,
      },
      revalidate: 43200,
    }
  } catch (err) {
    throw err
  }
}

export default HomePage
