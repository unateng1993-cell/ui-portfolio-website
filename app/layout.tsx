import type { Metadata } from 'next'
import { Geist_Mono, Noto_Sans_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-sc",
})

export const metadata: Metadata = {
  title: '邓书峰 · 视觉设计师作品集',
  description: '邓书峰，8年平面设计实战经验的视觉设计师。擅长品牌视觉设计、跨境电商平台图片设计、产品拍摄精修、AIGC 渲染与视频剪辑。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`bg-background ${notoSansSC.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
