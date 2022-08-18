import { HamburgerProps } from 'interfaces/interfaces'

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <button
      className="fixed top-[24px] right-[16px] z-50 w-10 h-10"
      onClick={onClick}
    >
      <span className="block relative w-full h-[2px] bg-sandstone before:content-[''] after:content-[''] before:block after:block before:absolute after:absolute before:-top-[10px] after:-bottom-[10px] before:w-full after:w-full before:h-[2px] after:h-[2px] before:bg-inherit after:bg-inherit"></span>
    </button>
  )
}

export default Hamburger
