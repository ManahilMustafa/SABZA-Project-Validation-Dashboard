
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata= {
  title: "SABZA Project Validation Dashboard",
  description: "Secure blockchain-based project validation for investors and token issuers",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
