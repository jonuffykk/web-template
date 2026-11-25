import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })

export const metadata: Metadata = {
  title: 'Template Next.js com TypeScript e Tailwind',
  description: 'Base em Next.js 16, React 19, TypeScript, Tailwind CSS 4 e ESLint.',
  icons: { icon: '/logo.png' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  )
}
