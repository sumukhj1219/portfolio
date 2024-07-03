import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

const components: { title: string; logo: any; description: string; href: string }[] = [
	{
		title: 'ONLINE EDUCATION PLATFORM USING AI',
		logo: <Image src={'/webinar.png'}  alt='title' width={250} height={250} />,
		description: 'An innovative online platform that leverages AI technology to help students enhance their learning experience. The platform offers interactive tests and personalized feedback to improve performance. Join us to take your education to the next level.',
		href: 'https://github.com/sumukhj1219/online-education'
	},
	{
		title: "TASK MANAGER USING NEXT JS",
		logo: <Image src={'/task.png'}  alt='title' width={250} height={250} />,
		description: 'An innovative online platform that leverages AI technology to help students enhance their learning experience. The platform offers interactive tests and personalized feedback to improve performance. Join us to take your education to the next level.',
		href: 'https://github.com/sumukhj1219/tasker-nextjs'
	},
	{
		title: "ONLINE SIGNATURE GENERATOR AND FREE DOWNLOAD",
		logo: <Image src={'/computer.png'}  alt='title' width={250} height={250} />,
		description: 'Create professional digital signatures with our online generator. Customize your signature style and download it for free. Perfect for documents, emails, and more.Create professional digital signatures effortlessly with our online generator. Customize your signature style with a variety of fonts and colors to match your personal or business needs. ',
		href: 'https://sumukhj1219.github.io/ESignature/' 
	},
	{
		title: "A BALL SHOOTER GAME USING HTML CSS AND JAVASCRIPT AND CANVAS",
		logo: <Image src={'/gaming-console.png'}  alt='title' width={250} height={250} />,
		description: 'A fun and addictive ball shooter game built with HTML, CSS, JavaScript, and Canvas. Players aim and shoot balls to hit targets, scoring points for accuracy. The game features smooth animations and responsive controls. Designed to be engaging for all ages, it provides hours of entertainment. Try it now and test your shooting skills!',
		href: 'https://sumukhj1219.github.io/ball-shooter/'
	},
	{
		title: "HITMAN FOR A REASON 45",
		logo: <Image src={'/cricket.png'}  alt='title' width={250} height={250} />,
		description: 'Step into the shoes of a skilled hitman in "Hitman for a Reason 45." Use stealth, strategy, and precision to complete high-stakes missions. Each assignment presents unique challenges requiring careful planning and execution. Navigate through detailed environments, avoiding detection and neutralizing targets with various tools and techniques.',

		href: 'https://sumukhj1219.github.io/HITMAN/' 
	}
];	
export function Cards() {
  return (
	<>
	{components.map((item)=>(
		<Card key={item.title} className="max-w-7xl mx-auto m-10 border-black border-r-4 border-b-4 border-t-2 border-l-2 rounded-3xl flex-col">
		<CardHeader>
		  <CardTitle>{item.title}</CardTitle>
		</CardHeader>
		<CardContent className="flex">
		 {item.logo}
		 <CardDescription>{item.description}</CardDescription>
		</CardContent>
		<CardFooter className="flex justify-between">
		  <Link href={item.href}>
		  <Button>Visit</Button>
		  </Link>
		</CardFooter>
	  </Card>
	))}
	</>
  )
}
