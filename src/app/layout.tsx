import './globals.css'
import './assets/styles.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import GlobalData from './context'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })



export const metadata: Metadata = {
  title: 'Nobelists',
  description: 'Nextjs Typescript',
  icons: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="en">
        <body className={roboto.className}>
          <GlobalData>{children}</GlobalData>
        </body>
    </html>
  )
}


