import About from 'components/About'
import LeftColumn from 'components/LeftColumn'
import Repos from 'components/Repos'
import RightColumn from 'components/RightColumn'
import Social from 'components/Social'
import Spotify from 'components/Spotify'
import { useSong } from 'hooks/useSong'
import { HomeProps } from 'interfaces/Home'
import { GetServerSideProps } from 'next'
import { getRepos } from 'services/getRepos'

const Home = ({ repos }: HomeProps) => {
  const { playing } = useSong()

  return (
    <main>
      <div className="relative w-full max-w-[1400px] mx-auto">
        <LeftColumn>
          <About />
          <Social />
          <div className="flex items-center justify-between">
            <Spotify song={playing} />
          </div>
        </LeftColumn>
        <RightColumn>
          <Repos data={repos} />
        </RightColumn>
      </div>
    </main>
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
