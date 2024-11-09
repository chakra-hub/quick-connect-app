import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Home() {
  return (

    <div className="flex w-full max-w-sm space-x-2" style={{marginTop:'2rem'}} >
      <Input type="email" placeholder="Email" />
      <Button type="submit">Connect</Button>
    </div>
  )
}
