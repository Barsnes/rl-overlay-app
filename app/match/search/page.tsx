import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Index() {
	return (
		<>
			<Card className="w-[100%]">
				<CardHeader>
					<CardTitle>Search for match</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="id">Match ID</Label>
								<Input id="id" placeholder="Id of the match" />
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</>
	)
}
