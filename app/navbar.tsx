"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useToast } from "../components/ui/use-toast"

export default function Navbar() {
	const [currentPath, setCurrentPath] = useState("")

	const pathname = usePathname()
	const { toast } = useToast()

	useEffect(() => {
		setCurrentPath(pathname)
	}, [pathname])

	const handleToast = () => {
		toast({
			title: "Hello world!",
			description: "This is a toast message.",
		})
	}

	return (
		<div className="bg-gray-900">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<nav
						className={cn("flex items-center space-x-4 lg:space-x-6", "mx-6")}
					>
						<Link href="/" className="text-sm font-medium" passHref>
							<Button variant={currentPath === "/" ? "outline" : "link"}>
								Home
							</Button>
						</Link>
						<Link href="/match" className="text-sm font-medium" passHref>
							<Button variant={currentPath === "/match" ? "outline" : "link"}>
								Match
							</Button>
						</Link>
						<Link href="/match/search" className="text-sm font-medium" passHref>
							<Button
								variant={currentPath === "/match/search" ? "outline" : "link"}
							>
								Search Match
							</Button>
						</Link>
						<Button onClick={handleToast}>Toast</Button>
					</nav>
					<div className="ml-auto flex items-center space-x-4">
						<div>
							<Input
								type="search"
								placeholder="Search..."
								className="h-9 md:w-[100px] lg:w-[300px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
