import { GenericLayoutProps } from '@/types/layouts'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Resume from '@/components/resume'
import Social from '@/components/social'

import '@/styles/global.css'

export default function RootLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body className="text-white text-render-legibility bg-spruce bg-topography bg-fixed">
        <Header showNav={true} />
        <Hero />
        <main className="space-y-24 lg:space-y-48">{children}</main>
        <Social />
        <Resume />
        <Footer />
      </body>
    </html>
  )
}
