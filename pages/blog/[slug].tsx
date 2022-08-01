import LeftColumn from 'components/LeftColumn'
import RightColumn from 'components/RightColumn'
import { getPost } from 'graphql/queries'
import { getCategory } from 'helpers/getCategory'
import { getDate } from 'helpers/getDate'
import { getHTML } from 'helpers/getHTML'
import { strapi } from 'lib/strapi'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Post = ({ post }: any) => {
  return (
    <>
      <Head>
        <title>{post.Title}</title>
      </Head>
      <main>
        <article
          className="relative w-full max-w-[1400px] mx-auto"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <LeftColumn>
            <header>
              <Link href="/">
                <a className="inline-flex items-center mb-4 text-xs">Home</a>
              </Link>
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
            </header>
          </LeftColumn>
          <RightColumn>
            <div
              className="p-10 text-base leading-loose text-dawn bg-dusk space-y-6"
              dangerouslySetInnerHTML={{ __html: post.value }}
            />
          </RightColumn>
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data } = await strapi.query({
      query: getPost,
      variables: { slug: params?.slug as string },
    })
    const content = await getHTML(data.blogs.data[0].attributes.Body)

    return {
      props: {
        post: {
          ...data.blogs.data[0].attributes,
          ...content,
        },
      },
    }
  } catch (err) {
    console.error(err)

    return {
      props: {},
    }
  }
}

export default Post
