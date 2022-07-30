const RightColumn = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-between static xl:absolute xl:top-0 xl:right-0 w-full xl:max-w-[736px] xl:h-screen p-5 sm:p-10 xl:p-32 xl:pr-8 xl:pb-8 xl:pl-0 space-y-32">
      {children}
    </div>
  )
}

export default RightColumn
