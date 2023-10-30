import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { GenericLayoutProps } from '@/types/layouts'

import { Progress } from '@/components/progress'
import { Sidebar } from '@/components/sidebar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ernesto Arellano',
  description: 'Front-End Engineer',
}

/**
 * Component that wraps all pages.
 *
 * @param {GenericLayoutProps} props The component props
 * @returns {React.ReactElement} The component
 */
export default function RootLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body className="font-premier-league-regular text-foreground bg-gradient bg-fixed">
        <Progress />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}
