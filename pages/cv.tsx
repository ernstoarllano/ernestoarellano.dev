import PDF from 'components/about/PDF'
import Logo from 'components/header/Logo'
import Head from 'next/head'

const CV = () => {
  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <header className="header">
        <Logo />
      </header>
      <main className="py-24 lg:py-32">
        <div className="relative flex flex-col w-full max-w-[1000px] mx-auto space-y-12">
          <PDF />
        </div>
      </main>
    </>
  )
}

export default CV
