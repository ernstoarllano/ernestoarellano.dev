import Loading from 'components/Loading'

const BlogLoading = () => {
  return (
    <section id="blog" className="scroll-m-8">
      <div className="w-full lg:max-w-[700px] lg:mx-auto space-y-12 lg:space-y-24">
        <h3 className="section-title">
          <span className="mr-2 text-sandstone">04.</span>Blog
        </h3>
        <Loading />
      </div>
    </section>
  )
}

export default BlogLoading
