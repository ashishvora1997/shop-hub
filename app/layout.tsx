import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/contexts/cart-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shophub-a2z.vercel.app'),
  title: 'ShopHub - Your Online Store',
  description: 'Browse and shop from our wide selection of products. Modern e-commerce application with Next.js, React, and TypeScript.',
  keywords: ['e-commerce', 'shopping', 'products', 'store', 'next.js', 'react'],
  authors: [{ name: 'ShopHub Team' }],
  creator: 'ShopHub',
  publisher: 'ShopHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shophub-a2z.vercel.app',
    siteName: 'ShopHub',
    title: 'ShopHub - Your Online Store',
    description: 'Browse and shop from our wide selection of products.',
    images: [
      {
        url: 'https://shophub-a2z.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ShopHub - E-commerce Store',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopHub - Your Online Store',
    description: 'Browse and shop from our wide selection of products.',
    images: ['https://shophub-a2z.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ShopHub',
  },
  formatDetection: {
    telephone: false,
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:logo" content="https://shophub-pi.vercel.app/favicon-32x32.png" />
        <meta property="og:logo:width" content="400" />
        <meta property="og:logo:height" content="400" />
        <meta property="og:logo:alt" content="ShopHub Logo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
