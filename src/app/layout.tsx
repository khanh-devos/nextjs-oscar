import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GlobalData from './context'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Nobelists',
  description: 'List of Nobelists',
  icons: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <GlobalData>{children}</GlobalData>
      </body>
    </html>
  )
}


