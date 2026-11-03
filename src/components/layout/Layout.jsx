import { Analytics } from '@vercel/analytics/react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
