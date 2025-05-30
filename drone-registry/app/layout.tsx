import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import WagmiProviderWrapper from "./WagmiProviderWrapper"; // Import the new WagmiProviderWrapper

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Drone Registry",
  description: "Register your drone flights and manage insurance claims",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProviderWrapper> {/* Use the new WagmiProviderWrapper */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 container mx-auto py-6 px-4">{children}</main>
            </div>
          </ThemeProvider>
        </WagmiProviderWrapper>
      </body>
    </html>
  )
}