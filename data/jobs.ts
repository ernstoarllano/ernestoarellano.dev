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
    title: 'Senior Full Stack Web Developer',
    company: 'Big Rig Media',
    date: 'Jul 2015 - Present',
    location: 'La Quinta, CA',
    description: `
      <li>Serve as a technical consultant between various stake holders: project managers, designers, marketers, clients</li>
      <li>Translate high-profile design wireframes into readable, maintainable code with PHP, JavaScript, TypeScript, React, HTML and Tailwind CSS</li>
      <li>Promote and communicate new methodologies and technologies to managers and team members to increase business efficiency</li>
      <li>Mentor and assist team members both personally and professionally to reach personal and business objectives</li>
      <li>Architect and conceptualize custom products like Xpress, a custom Gutenberg website builder to cut build times by 60%</li>
      <li>Contribute code and ideas to custom SaaS application</li>
    `,
  },
  {
    id: 2,
    title: 'Full Stack Web Developer',
    company: 'Big Rig Media',
    date: 'August 2013 - July 2015',
    location: 'La Quinta, CA',
    description: `
      <li>Translate hundreds of Photoshop design wireframes into readable, maintainable code with PHP, JavaScript, HTML and Sass</li>
      <li>Promote the modernization of the development department by using a modern WordPress development workflow with tools like Grunt, Bower, Gulp, etc</li>
      <li>Advocate the modernization of the client onboarding process by implementing methods like mood boards, content audits, etc</li>
    `,
  },
  {
    id: 3,
    title: 'Junior Full Stack Web Developer',
    company: 'Conveyor Group',
    date: 'July 2011 - Jul 2013',
    location: 'Imperial, CA',
    description: `
      <li>Translate Photoshop design wireframes into readable, maintainable code with PHP, JavaScript, HTML and CSS</li>
      <li>Built a custom business members directory with basic search capabilities for Imperial Chamber of Commerce</li>
      <li>Contribute to company's custom in-house CMS, SiteFactory, by building out new features such as an image carousel module along with a voting results module</li>
      <li>Use version control to maintain all instances of SiteFactory</li>
    `,
  },
  {
    id: 4,
    title: 'Intern',
    company: 'Conveyor Group',
    date: 'May 2011 - Jul 2011',
    location: 'Imperial, CA',
    description: `
      <li>Translate Photoshop design wireframes into readable, maintainable code with PHP, JavaScript, HTML and CSS</li>
      <li>Demonstrate ability to learn new concepts quickly by working closely with lead developer to learn CodeIgniter</li>
      <li>Learn to work in a collaborative team setting</li>
    `,
  },
]
