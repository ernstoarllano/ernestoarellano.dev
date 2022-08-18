import classNames from 'classnames'
import Post from 'components/blog/Post'
import { useElementOnScreen } from 'hooks/useElementOnScreen'
import { BlogProps } from 'interfaces/interfaces'

const Blog = ({ posts }: BlogProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <>
      {posts && (
        <section id="blog" className={`scroll-m-8 ${classes}`} ref={ref}>
          <div className="w-full lg:max-w-[700px] lg:mx-auto space-y-6 lg:space-y-24">
            <h3 className="section-title">
              <span className="mr-2 text-sandstone">04.</span>Blog
            </h3>
            <div className="grid md:grid-cols-2 gap-3 group">
              {posts.map((post: any) => (
                <Post
                  key={post.id}
                  title={post.attributes.Title}
                  slug={post.attributes.Slug}
                  publishedAt={post.attributes.publishedAt}
                  categories={post.attributes.categories.data}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Blog
