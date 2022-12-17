const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center sm:justify-end md:justify-center h-screen sm:mb-20 lg:mb-0">
      <div className="w-full lg:max-w-[1000px] lg:mx-auto lg:px-16 xl:px-0 space-y-6">
        <span className="font-light text-sandstone">Hi, my name is</span>
        <hgroup className="space-y-4">
          <h1 className="text-5xl lg:text-[80px] font-bold leading-none">
            Ernesto Arellano
          </h1>
          <h2 className="text-2xl lg:text-5xl font-semibold text-dawn">
            I build things for the web
          </h2>
        </hgroup>
        <p>{`I'm a full stack engineer (and occassional designer).`}</p>
      </div>
    </section>
  )
}

export default Hero
