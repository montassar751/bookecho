import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BookEcho - Résumés Audio de Livres",
  description: "Découvrez des idées puissantes extraites des meilleurs livres en format audio résumé.",
  keywords: "résumés audio, livres, développement personnel, business, français, arabe",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="BookEcho - Résumés Audio de Livres" />
        <meta
          property="og:description"
          content="Découvrez des idées puissantes extraites des meilleurs livres en format audio résumé."
        />
        <meta property="og:type" content="website" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
