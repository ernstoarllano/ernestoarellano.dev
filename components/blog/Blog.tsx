import Post from 'components/blog/Post'
import { BlogProps } from 'interfaces/interfaces'

const Blog = ({ posts }: BlogProps) => {
  return (
    <>
      {posts && (
        <div id="blog" className="xl:pb-32">
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
      )}
    </>
  )
}

export default Blog
