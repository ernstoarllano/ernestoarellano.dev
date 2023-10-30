/**
 * Component for displaying the navigation
 *
 * @returns {React.ReactElement} The navigation component
 */
export function Nav() {
  return (
    <nav>
      <ol className="flex items-center tracking-wider lg:space-x-12">
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ol>
    </nav>
  )
}
