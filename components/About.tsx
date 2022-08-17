import classNames from 'classnames'
import { useElementOnScreen } from 'hooks/useElementOnScreen'
import { AboutProps } from 'interfaces/About'
import Image from 'next/image'

const About = ({ content }: AboutProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <section
      id="about"
      className={`flex flex-col space-y-4 ${classes}`}
      ref={ref}
    >
      <div className="w-full lg:max-w-[900px] lg:mx-auto">
        {content && (
          <>
            <h3 className="section-title">
              <span className="mr-2 text-sandstone">01.</span>About
            </h3>
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7 mt-7 leading-loose space-y-6">
                <p>
                  Well hello there! My name is Ernesto and I enjoy creating
                  things for the web. I first got into web development back in
                  2011 when I started messing around with HTML & CSS. Soon after
                  that I found myself as an intern learning about other things
                  like PHP, jQuery and plenty more.
                </p>
                <p>
                  Fast forward 10 years and I am still as excited about learning
                  new technologies as when I first started learning about web
                  development.
                </p>
                <p>{`Below are a few technologies I'm currently working with:`}</p>
                <ul className="lg:grid lg:grid-cols-2 lg:gap-4">
                  <li>TypeScript</li>
                  <li>JavaScript (ES6)</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Strapi</li>
                  <li>Sanity</li>
                  <li>Blade Templates</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="profile">
                <Image
                  className="mix-blend-multiply grayscale"
                  src="/1517497599569.jpg"
                  alt="Ernesto Arellano"
                  layout="responsive"
                  width={337}
                  height={337}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default About
