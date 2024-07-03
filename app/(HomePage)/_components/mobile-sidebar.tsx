import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Building, Home, Menu, Paperclip, Phone, User } from "lucide-react"
import Link from "next/link";
const components: { title: string; href: string; logo: any }[] = [
    {
        title: "HOME",
        href: "/",
		logo: <Home />
    },
    {
        title: "About",
        href: "/about",
		logo: <Paperclip />
    },
    {
        title: "CONTACT",
        href: "mailto:sumukhjoshi4@gmail",
		logo: <Phone />
    },
    {
        title: "PROJECTS",
        href: "/projects",
		logo: <Building />
    },
];
export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
			<Menu size={36}/>
		</Button>
      </SheetTrigger>
      <SheetContent>
       {components.map((item)=>(
		<div key={item.href} className="mt-10 rounded-3xl w-full p-3 hover:bg-secondary ">
			<Link className="flex gap-5" href={item.href}>
				{item.logo}
				{item.title}
			</Link>
		</div>
	   ))}
        <SheetFooter>
         
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
