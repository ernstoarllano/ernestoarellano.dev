import Experience from 'components/Experience'
import Intro from 'components/Intro'
import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import Skills from 'components/Skills'
import Social from 'components/Social'
import { jobs } from 'data/jobs'
import Head from 'next/head'

const CV = () => {
  return (
    <>
      <Head>
        <title>Ernesto Arellano Resume</title>
      </Head>
      <main>
        <div className="relative w-full max-w-[1400px] mx-auto">
          <LeftColumn>
            <Intro />
            <Social />
          </LeftColumn>
          <RightColumn>
            <Experience jobs={jobs} />
            <Skills />
          </RightColumn>
        </div>
      </main>
    </>
  )
}

export default CV
