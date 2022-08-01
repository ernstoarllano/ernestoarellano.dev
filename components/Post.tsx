import { getCategory } from 'helpers/getCategory'
import { getDate } from 'helpers/getDate'
import { PostProps } from 'interfaces/Post'
import Link from 'next/link'

const Post = ({ title, slug, publishedAt, categories }: PostProps) => {
  return (
    <article
      className="flex-none min-h-[268px] xl:min-h-[368px] xl:odd:-translate-y-10"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <Link href={`/blog/${slug}`}>
        <a>
          <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]">
            <header>
              <p className="text-[10px] font-bold uppercase tracking-[3px]">
                {getCategory(categories)}
              </p>
              <div className="mt-2">
                <time
                  className="text-base text-dawn"
                  dateTime={publishedAt}
                  itemProp="datePublished"
                >
                  {getDate(publishedAt)}
                </time>
              </div>
            </header>
            <div className="flex flex-col">
              <h3 className="mt-2 mb-0 text-2xl font-bold" itemProp="headline">
                {title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default Post
