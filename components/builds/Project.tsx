import { getImageURL } from 'helpers/getImageURL'
import { ProjectProps } from 'interfaces/interfaces'
import Image from 'next/image'

const Project = ({
  tag,
  title,
  description,
  thumbnail,
  website,
  tech,
}: ProjectProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-4 group">
      <div className="order-2 lg:col-start-1 lg:col-end-8 lg:group-odd:col-start-7 lg:group-odd:col-end-[-1] lg:row-start-1 lg:row-end-[-1] shadow-2xl">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Image
            src={getImageURL(thumbnail)}
            alt="HTR"
            layout="responsive"
            width={680}
            height={380}
          />
        </a>
      </div>
      <div className="order-1 lg:col-start-7 lg:col-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8 lg:row-start-1 lg:row-end-[-1] lg:flex lg:flex-col lg:justify-center lg:relative lg:z-40 lg:text-right lg:group-odd:text-left space-y-4 lg:space-y-8">
        <div className="lg:self-end lg:group-odd:self-start space-y-1">
          <span className="text-xs uppercase tracking-[3px]">{tag}</span>
          <h4 className="font-bold">{title}</h4>
        </div>
        <div className="lg:self-end lg:group-odd:self-start p-5 text-sm font-regular bg-dawn rounded-md shadow-2xl">
          {description}
        </div>
        <span className="lg:self-end lg:group-odd:self-start text-xs text-sandstone tracking-wider">
          {tech}
        </span>
      </div>
    </div>
  )
}

export default Project
