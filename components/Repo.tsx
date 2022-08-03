const Repo = ({ url, primaryLanguage, name, description }: any) => {
  return (
    <article
      className="bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]"
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <a
        className="block p-10"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-[10px] font-bold uppercase tracking-[3px]">
          {primaryLanguage.name}
        </span>
        <h2 itemProp="name">{name}</h2>
        <p className="mt-2 text-sm text-dawn">{description}</p>
      </a>
    </article>
  )
}

export default Repo
