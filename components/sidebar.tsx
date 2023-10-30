import { Briefcase, Github, Linkedin, Presentation } from 'lucide-react'
import Link from 'next/link'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

interface SidebarProps {
  /**
   * The class names for the component.
   */
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <nav
      className={cn(
        'lg:flex lg:flex-col lg:items-center lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:w-20 lg:py-10 lg:bg-gradient-t lg:shadow-2xl lg:space-y-36',
        className,
      )}
    >
      <Link className="block w-12 h-12" href="/">
        <svg
          className="fill-transparent"
          viewBox="0 0 548 548"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="528"
            height="528"
            className="stroke-[60px] stroke-white"
          ></rect>
          <path
            d="M257.52 208.2V257.2H323.32V288.28H257.52V340.08H331.72V372H218.32V176.28H331.72V208.2H257.52Z"
            className="fill-white"
          ></path>
        </svg>
      </Link>
      <ul className="space-y-6">
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Briefcase className="w-6 h-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Work Experience</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Presentation className="w-6 h-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Featured Work</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <a href="https://github.com/ernstoarllano">
            <Github className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ernstoarllano">
            <Linkedin className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
