//layout the maine pag to control the website jsut like app in react
import type { Metadata } from 'next'
import { Italiana, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'],
 weight:[ "400", "500",  "700",  "900"], 
 style:["italic","normal"],
  variable: "--font-Poppins" })

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='font-normal'>
           {/* <header></header> */}
          {children}
          {/* <footer></footer> */}
          </main>
      </body>
    </html>
  )
}
