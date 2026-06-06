import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'Kauã Goncalves | Dev Full-stack',
  description: 'Portfólio de Kauã Goncalves — desenvolvedor front-end especializado em Next.js, React e Tailwind.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className={`${syne.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}