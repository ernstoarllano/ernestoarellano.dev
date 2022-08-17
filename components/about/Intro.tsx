import classNames from 'classnames'
import { useElementOnScreen } from 'hooks/useElementOnScreen'
import { IntroProps } from 'interfaces/interfaces'
import Image from 'next/image'

const Intro = ({ content }: IntroProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <section id="about" className={`scroll-m-8 ${classes}`} ref={ref}>
      <div className="w-full lg:max-w-[900px] lg:mx-auto space-y-24">
        <h3 className="section-title">
          <span className="mr-2 text-sandstone">01.</span>About
        </h3>
        <div>
          {content && (
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div
                  className="leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <ul className="lg:grid lg:grid-cols-2 lg:gap-4">
                  <li className="font-bold">TypeScript</li>
                  <li className="font-bold">JavaScript (ES6)</li>
                  <li className="font-bold">React</li>
                  <li className="font-bold">Next.js</li>
                  <li className="font-bold">Strapi</li>
                  <li className="font-bold">Sanity</li>
                  <li className="font-bold">Blade Templates</li>
                  <li className="font-bold">WordPress</li>
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
          )}
        </div>
      </div>
    </section>
  )
}

export default Intro
