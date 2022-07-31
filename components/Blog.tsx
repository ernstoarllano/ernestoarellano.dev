const Blog = () => {
  return (
    <div id="blog">
      <div className="grid md:grid-cols-2 gap-3 group">
        <article
          className="flex-none xl:min-h-[368px] xl:odd:-translate-y-10"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]">
            <header>
              <p className="text-[10px] font-bold uppercase tracking-[3px]">
                Code Snippets
              </p>
              <div className="mt-2">
                <time className="text-base text-dawn" itemProp="datePublished">
                  July 30, 2022
                </time>
              </div>
            </header>
            <div className="flex flex-col">
              <h3 className="mt-2 mb-0 text-2xl font-bold" itemProp="headline">
                How Tow: Spotify Currently Playing
              </h3>
            </div>
          </div>
        </article>
        <article
          className="flex-none xl:min-h-[368px] xl:odd:-translate-y-10"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]">
            <header>
              <p className="text-[10px] font-bold uppercase tracking-[3px]">
                Code Snippets
              </p>
              <div className="mt-2">
                <time className="text-base text-dawn" itemProp="datePublished">
                  July 30, 2022
                </time>
              </div>
            </header>
            <div className="flex flex-col">
              <h3 className="mt-2 mb-0 text-2xl font-bold" itemProp="headline">
                How To: GitHub Repos via Octokit and GraphQL
              </h3>
            </div>
          </div>
        </article>
        <article
          className="flex-none xl:min-h-[368px] xl:odd:-translate-y-10"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]">
            <header>
              <p className="text-[10px] font-bold uppercase tracking-[3px]">
                General
              </p>
              <div className="mt-2">
                <time className="text-base text-dawn" itemProp="datePublished">
                  July 30, 2022
                </time>
              </div>
            </header>
            <div className="flex flex-col">
              <h3 className="mt-2 mb-0 text-2xl font-bold" itemProp="headline">
                Relaunch Personal Website
              </h3>
            </div>
          </div>
        </article>
        <article
          className="flex-none xl:min-h-[368px] xl:odd:-translate-y-10"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]">
            <header>
              <p className="text-[10px] font-bold uppercase tracking-[3px]">
                General
              </p>
              <div className="mt-2">
                <time className="text-base text-dawn" itemProp="datePublished">
                  July 29, 2022
                </time>
              </div>
            </header>
            <div className="flex flex-col">
              <h3
                className="mt-2 mb-0 text-2xl font-bold"
                itemProp="headline"
              >{`Don't Stop Believing`}</h3>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Blog
