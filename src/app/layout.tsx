import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const BASE_URL = 'https://car.mustarddata.com';
const GA_ID = 'G-XD48NQEJC5';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#d97706',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '자동차 계산기 - 자동차세, 취등록세, 할부금, 유류비 계산',
    template: '%s | 자동차 계산기',
  },
  description:
    '자동차세, 취등록세, 할부금, 유류비, 감가상각, 과태료까지 자동차 관련 계산을 한 곳에서. 2026년 최신 세율과 법령 기준으로 정확하게 계산합니다.',
  keywords: [
    '자동차세 계산기',
    '취등록세 계산기',
    '자동차 할부 계산기',
    '유류비 계산기',
    '자동차 감가상각',
    '교통 과태료',
    '범칙금 조회',
    '자동차세 연납',
    '신차 취등록세',
    '중고차 취등록세',
    '전기차 세금',
    '자동차 유지비',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: '자동차 계산기 - 세금, 할부, 유류비 한번에 계산',
    description:
      '자동차세, 취등록세, 할부금, 유류비, 감가상각까지. 2026년 기준 자동차 관련 비용을 정확하게 계산하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: BASE_URL,
    siteName: '자동차 계산기',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: '자동차 계산기 - 자동차세, 취등록세, 할부금, 유류비 계산',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '자동차 계산기',
    description: '자동차세, 취등록세, 할부금, 유류비 등 자동차 비용 계산',
    images: [`${BASE_URL}/og-image.png`],
  },
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
  category: '자동차',
  creator: 'MustardData',
  publisher: 'MustardData',
  icons: {
    icon: '/favicon.svg',
    apple: '/og-image.png',
  },
  other: {
    'naver-site-verification': '8c32b15ff018b75af20543ce6819161cdf27535f',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-adsense-account" content="ca-pub-3224638013189545" />

        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        <meta name="daumsa" content="index,follow" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="자동차 계산기" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link
          rel="preload"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3224638013189545"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
