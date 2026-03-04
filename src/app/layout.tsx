import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lift Tracker - Track Your Workouts',
  description: 'Simple SaaS app to track your lifts and exercises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">💪 Lift Tracker</h1>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                <a href="/workouts" className="text-gray-600 hover:text-gray-900">Workouts</a>
                <a href="/exercises" className="text-gray-600 hover:text-gray-900">Exercises</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}