const LeftColumn = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-between static xl:fixed w-full xl:max-w-[596px] xl:h-screen p-5 sm:p-10 xl:p-32 xl:pl-8 xl:pb-8 xl:pr-0 space-y-12 xl:space-y-0">
      {children}
    </div>
  )
}

export default LeftColumn
