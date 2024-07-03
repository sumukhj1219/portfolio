import { Sidebar } from '@/app/(HomePage)/_components/mobile-sidebar'
import React from 'react'
import Skills from './level'
import Image from 'next/image'
import SkillsMobile from './skills-mobile'
const MobileView = () =>
{
	return (
		<>
			<nav className='fixed  top-0 left-0 p-2'>
				<Sidebar />
			</nav>
				<header className='mt-14 m-2 flex items-center justify-center'>
					<h1 className='text-3xl font-extrabold'>Passion Fuels Purpose!</h1>
				</header>
				<div className='mt-14 flex-col m-2'>
					<div className=''>
						<span className='text-primary text-lg font-extrabold'>BIOGRAPHY</span>
						<p className='text-md font-normal mt-4'>Im Sumukh Joshi, currently pursuing my degree with a keen interest in web development and blockchain technology. Over the past two years, Ive been immersed in coding, exploring various aspects of software development and building skills that blend creativity with technical expertise.
						</p>
						<br />
						<p className='text-md font-normal'>My journey involves exploring new technologies and frameworks to create innovative solutions that impact the digital landscape. Passionate about leveraging the power of the web and blockchain to transform ideas into tangible realities.
						</p>
					</div>
					<div className='p-4 rounded-xl border-r-8 border-b-8 border-l-2 border-t-2 border-black mt-4 m-2'>
						<Image src={'./avatar.jpeg'} alt='avatar' className='rounded-3xl' width={350} height={250} />

					</div>
					<div className='flex justify-between'>
						<span className='flex-col'>
						<h1 className='text-3xl font-extrabold'>10+</h1>
						<h1 className='text-muted-foreground text-sm'>Projects completed</h1>
						</span>
						<span className='flex-col'>
						<h1 className='text-3xl font-extrabold'>1.5</h1>
						<h1 className='text-muted-foreground text-sm'>Years of Experience</h1>
						</span>
					</div>
				</div>
				<div className='flex items-center justify-center mt-20'>
					<h1 className='text-3xl font-extrabold'>Skills and Experience</h1>
				</div>
				<div className='flex items-center justify-center mt-20'>
					<SkillsMobile />
				</div>
				<footer className='w-full text-center p-4 mt-4 border-t'>
				<p>&copy; {new Date().getFullYear()} Sumukh Joshi. All rights reserved.</p>
			</footer>
		</>
	)
}

export default MobileView
