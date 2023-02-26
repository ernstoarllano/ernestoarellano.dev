import { GenericLayoutProps } from '@/types/layouts'

import Footer from '@/components/footer'
import Header from '@/components/header'

export default function ResumeLayout({ children }: GenericLayoutProps) {
  return (
    <html lang="en">
      <body className="text-sand render-legibility bg-spruce image-topography bg-fixed">
        <Header showNav={false} />
        <main className="space-y-24 lg:space-y-48">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
