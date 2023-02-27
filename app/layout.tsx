import { Poppins } from 'next/font/google'

import { GenericLayoutProps } from '@/types/layouts'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Social from '@/components/social'

import { cn } from '@/utils/styles'

import '@/styles/global.css'

export const metadata = {
  title: 'Ernesto Arellano | Senior Full Stack Engineer',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'px-4 lg:px-0 font-poppins text-base font-normal  text-sand render-legibility bg-spruce image-topography bg-fixed',
          poppins.variable
        )}
      >
        <Header showNav={true} />
        <Hero />
        <main className="space-y-24 lg:space-y-48">{children}</main>
        <Social />
        <Footer />
      </body>
    </html>
  )
}
