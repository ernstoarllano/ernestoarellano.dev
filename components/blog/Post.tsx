import { getCategory } from 'helpers/getCategory'
import { getDate } from 'helpers/getDate'
import { PostProps } from 'interfaces/interfaces'
import Link from 'next/link'

const Post = ({ title, slug, publishedAt, categories }: PostProps) => {
  return (
    <article
      className="flex-none min-h-[268px] xl:min-h-[368px] xl:odd:-translate-y-10"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="flex flex-col justify-between w-full h-full p-10 text-charcoal bg-sandstone transition duration-500 xl:group-hover:opacity-75 xl:hover:opacity-important xl:hover:scale-[1.1] xl:hover:shadow-2xl">
        <header>
          <p className="text-[10px] font-bold uppercase tracking-[3px]">
            {getCategory(categories)}
          </p>
          <div className="mt-2">
            <time
              className="text-base font-medium"
              dateTime={publishedAt}
              itemProp="datePublished"
            >
              {getDate(publishedAt)}
            </time>
          </div>
        </header>
        <div className="flex flex-col">
          <h5 className="text-lg font-bold leading-snug" itemProp="headline">
            {title}
          </h5>
        </div>
        <Link href={`/blog/${slug}`}>
          <a className="absolute inset-0 z-20" />
        </Link>
      </div>
    </article>
  )
}

export default Post
