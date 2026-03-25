import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const GA_MEASUREMENT_ID = "GA_MEASUREMENT_ID"

export const metadata: Metadata = {
  title: "Lin's Team | Toronto's Award-Winning Real Estate Growth Team",
  description:
    "Beyond buying and selling, we build property value. Lin's Team is Toronto's award-winning real estate growth team led by Min Lin, Founder & Vice President at Bay Street Group.",
  keywords: [
    "Toronto real estate",
    "Lin's Team",
    "Min Lin",
    "Bay Street Group",
    "luxury homes Toronto",
    "real estate agent Toronto",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: "/images/favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Geologica:wght,CRSV@100..900,0&display=swap');`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
