import "@/styles/globals.css"
import React from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { StyleSwitcher } from "@/components/ui/style-switcher"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/app/navbar"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [],
	authors: [
		{
			name: "Tobias Barsnes",
			url: "https://barsnes.dev",
		},
	],
	creator: "Tobias Barsnes",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@TorskenCS",
	},
	/* icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	}, */
	/*   manifest: `${siteConfig.url}/site.webmanifest`, */
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<Navbar />
						<main
							className={`flex px-5 py-6 xl:px-56 xs:px-5 md:px-16 ${inter.className}`}
						>
							{children}
						</main>
						<TailwindIndicator />
					</ThemeProvider>
					<StyleSwitcher />
					<Toaster />
				</body>
			</html>
		</>
	)
}

interface RootLayoutProps {
	children: React.ReactNode
}
