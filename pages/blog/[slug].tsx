import Footer from 'components/Footer'
import Logo from 'components/header/Logo'
import Share from 'components/social/Share'
import { getCategory } from 'helpers/getCategory'
import { getDate } from 'helpers/getDate'
import { getReadTime } from 'helpers/getReadTime'
import { PostPageProps } from 'interfaces/interfaces'
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
      <header className="header">
        <Logo />
      </header>
      <main className="post">
        <article
          className="relative w-full max-w-[1000px] mx-auto space-y-12 lg:space-y-24"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <header className="space-y-8 lg:space-y-16">
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[3px]">
                {getCategory(post.categories.data)}
              </p>
              <h1
                className="mt-2 mb-0 text-4xl lg:text-6xl text-day font-bold"
                itemProp="headline"
              >
                {post.Title}
              </h1>
              <div className="mt-2 mb-6">
                <time
                  className="text-base text-dawn"
                  dateTime={post.publishedAt}
                  itemProp="datePublished"
                >
                  {getDate(post.publishedAt)}
                </time>
              </div>
              <Share url={asPath} />
            </div>
          </header>
          <div className="space-y-6">
            <span className="text-[10px] font-bold text-dawn uppercase tracking-[3px]">
              {getReadTime(content)} min read
            </span>
            <div
              className="text-base leading-loose space-y-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <Link href="/" legacyBehavior>
              <a className="inline-flex mt-12">Back</a>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { posts } = await getPosts()

    const paths = posts.map((post) => ({
      params: { slug: post.attributes.Slug },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (err) {
    console.error(err)

    throw err
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
    throw err
  }
}

export default PostPage
