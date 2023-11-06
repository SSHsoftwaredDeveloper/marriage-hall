import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Marriage Hall',
  description: 'Marriage Hall website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative '>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
