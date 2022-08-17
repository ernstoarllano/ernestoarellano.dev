const Hero = () => {
  return (
    <section className="lg:flex lg:flex-col lg:items-start lg:justify-center w-full lg:max-w-[1000px] lg:h-screen mx-auto">
      <div className="w-full lg:space-y-12">
        <span className="font-light text-sandstone">Hi, my name is</span>
        <hgroup className="space-y-8">
          <h1 className="text-[80px] font-bold">Ernesto Arellano</h1>
          <h2 className="text-5xl font-semibold text-dawn">
            I build things for the web
          </h2>
        </hgroup>
        <p>{`I'm a full-stack web developer (and occassional designer).`}</p>
      </div>
    </section>
  )
}

export default Hero
