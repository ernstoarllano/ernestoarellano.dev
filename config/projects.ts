import { Project } from '@/types/projects'

export const projects: Project[] = [
  {
    tag: 'Ongoing (Private)',
    title: 'Console Web',
    description: `<strong>Dispel's</strong> web console for remote accessing industrial networks via end-to-end encryption and moving target defense.`,
    repo: 'https://github.com/dispel/console-web',
    url: 'https://console.dispel.io',
    image: '/console-web.png',
    tags: ['React', 'JavaScript', 'Jest', 'Storybook', 'CSS Modules'],
    private: true
  },
  {
    tag: 'Recent Work',
    title: 'Ernesto Arellano v3',
    description: `The third iteration of my portfolio. I migrated away from <strong>Strapi</strong> to a fully static site using <strong>Next.js</strong> 13.`,
    repo: 'https://github.com/ernstoarllano/ernestoarellano.dev',
    url: 'https://www.ernestoarellano.dev',
    image: '/ernestoarellano.png',
    tags: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    private: false
  },
]