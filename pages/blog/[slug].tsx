import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import Share from 'components/Share'
import { getCategory } from 'helpers/getCategory'
import { getDate } from 'helpers/getDate'
import { getReadTime } from 'helpers/getReadTime'
import { PostPageProps } from 'interfaces/Page'
import { Post } from 'interfaces/Post'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPost } from 'services/getPost'
import { getPosts } from 'services/getPosts'

const PostPage = ({ post, content }: PostPageProps) => {
  const { asPath, isFallback } = useRouter()

  if (isFallback) {
    return (
      <main className="post">
        <div className="grid place-content-center relative w-full max-w-[1400px] h-screen mx-auto">
          <h3 className="text-center">Loading...</h3>
        </div>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{post.Title}</title>
      </Head>
      <main className="post">
        <article
          className="relative w-full max-w-[1400px] mx-auto"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <LeftColumn>
            <header className="space-y-8">
              <Link href="/">
                <a className="inline-flex items-center text-xs">Home</a>
              </Link>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[3px]">
                  {getCategory(post.categories.data)}
                </p>
                <h1
                  className="mt-2 mb-0 text-4xl lg:text-6xl text-day font-bold"
                  itemProp="headline"
                >
                  {post.Title}
                </h1>
                <div className="mt-2">
                  <time
                    className="text-base text-dawn"
                    dateTime={post.publishedAt}
                    itemProp="datePublished"
                  >
                    {getDate(post.publishedAt)}
                  </time>
                </div>
              </div>
              <Share url={asPath} />
            </header>
          </LeftColumn>
          <RightColumn>
            <div className="xl:pb-32">
              <div className="p-10 bg-dusk space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[3px]">
                  {getReadTime(content)} min read
                </span>
                <div
                  className="text-sm leading-loose text-dawn space-y-6"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </RightColumn>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { posts } = await getPosts()

    const paths = posts.map((post: Post) => ({
      params: { slug: post.attributes.Slug },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    console.error(err)

    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { post, content } = await getPost(params?.slug as string)

    return {
      props: {
        post,
        content,
      },
      revalidate: 43200,
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default PostPage
