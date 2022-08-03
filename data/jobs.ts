type Job = Array<{
  id: number
  title: string
  company: string
  date: string
  location: string
  description: string
}>

export const jobs: Job = [
  {
    id: 1,
    title: 'Senior Full Stack Web Developer / Full Stack Web Developer',
    company: 'Big Rig Media',
    date: 'Jul 2013 - Present',
    location: 'La Quinta, CA',
    description: `
      <li>Translate high-profile design wireframes into readable, reusable, maintainable code with PHP, JavaScript, TypeScript, React and Tailwind CSS.</li>
      <li>Promote and communicate new methodologies and technologies to managers and team members to increase business efficiency.</li>
      <li>Mentor and assist team members both personally and professionally to reach personal and business objectives.</li>
      <li>Plan and lead the creation of Xpress UI, the company's in-house design system to cut build times by 60%.</li>
    `,
  },
  {
    id: 2,
    title: 'Junior Full Stack Web Developer / Intern',
    company: 'Conveyor Group',
    date: 'Sep 2011 - Jul 2013',
    location: 'Imperial, CA',
    description: `
      <li>Successfully built a business member directory with search capabilities for Imperial Chamber of Commerce.</li>
      <li>Improve in-house CMS by building out new features such as an image carousel and voting results module.</li>
      <li>Convert design wireframes into readable, reusable, maintainable code with PHP, CSS and jQuery.</li>
      <li>Demonstrate ability to learn new concepts quickly by working closely with lead developer in learning CodeIgniter.</li>
    `,
  },
]
