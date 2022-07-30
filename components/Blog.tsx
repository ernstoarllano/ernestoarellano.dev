const Blog = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <article className="flex-none xl:min-h-[368px]">
        <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition md:hover:scale-[1.1]">
          <header>
            <p>Category</p>
            <div>
              <time>July 30, 2022</time>
            </div>
          </header>
          <div className="flex flex-col">
            <h3 className="mt-2 mb-0 font-bold">Title</h3>
          </div>
        </div>
      </article>
      <article className="flex-none xl:min-h-[368px]">
        <div className="flex flex-col justify-between w-full h-full p-10 bg-dusk transition md:hover:scale-[1.1]">
          <header>
            <p>Category</p>
            <div>
              <time>July 30, 2022</time>
            </div>
          </header>
          <div className="flex flex-col">
            <h3 className="mt-2 mb-0 font-bold">Title</h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Blog
