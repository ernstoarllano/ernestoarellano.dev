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
        <p>{`I'm a full-stack web developer (and occassional designer).`}</p>
        <a
          className="inline-block px-5 py-3 font-semibold text-charcoal tracking-widest uppercase bg-dawn transition-all duration-700 lg:hover:bg-sandstone"
          href="mailto:ernestoarellano@icloud.com"
        >
          Available for Hire
        </a>
      </div>
    </section>
  )
}

export default Hero
