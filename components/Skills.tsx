interface Skill {
  name: string
  level: number
}

interface SkillsProps {
  data: Skill[]
}

const Skills = ({ data }: SkillsProps) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 w-full">
      {data.map((skill, idx) => (
        <div key={idx} className="flex flex-col space-y-2">
          <progress
            className="w-full bg-dusk"
            value={skill.level}
            max={10}
          ></progress>
          <span className="font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Skills
