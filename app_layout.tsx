import { josefinSans } from './fonts'
import './globals.css'

export const metadata = {
  title: '建設会社ランディングページ',
  description: '確かな技術と信頼で未来を築く建設会社',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={josefinSans.className}>
      <body>{children}</body>
    </html>
  )
}

