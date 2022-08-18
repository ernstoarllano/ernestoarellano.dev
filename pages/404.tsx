import Head from 'next/head'

const Whoops = () => {
  return (
    <>
      <Head>
        <title>Ernesto Arellano</title>
      </Head>
      <main>
        <div className="grid place-content-center relative w-full max-w-[1400px] h-screen mx-auto">
          <div className="text-center">
            <h1 className="mb-8 text-9xl font-bold uppercase">404</h1>
            <p className="mb-4 text-sm text-dawn leading-loose tracking-widest">{`This page doesn't exist.`}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Whoops
