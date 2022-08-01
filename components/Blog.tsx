import Post from 'components/Post'
import { BlogProps } from 'interfaces/Blog'

const Blog = ({ posts }: BlogProps) => {
  return (
    <div id="blog">
      <div className="grid md:grid-cols-2 gap-3 group">
        {posts.map((post) => (
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
  )
}

export default Blog
