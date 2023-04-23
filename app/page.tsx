import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <Link href="/match">
        <Button variant="default">Create new match</Button>
      </Link>
    </>
  )
}
