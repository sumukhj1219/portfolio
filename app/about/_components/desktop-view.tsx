'use client'
import Image from 'next/image'
import React from 'react'
import Skills from './level'

const DesktopView = () => {
  return (
	<>
	<header className='mt-28 flex items-center justify-center'>
		<h1 className='text-9xl font-extrabold'>Passion Fuels Purpose!</h1>
	</header>
	<div className='mt-14 grid grid-cols-12'>
	  <div className='col-start-2 col-end-5'>
		<span className='text-primary text-xl font-extrabold'>BIOGRAPHY</span>
		<p className='text-lg font-normal mt-4'>I'm Sumukh Joshi, currently pursuing my degree with a keen interest in web development and blockchain technology. Over the past two years, I've been immersed in coding, exploring various aspects of software development and building skills that blend creativity with technical expertise.
		</p>
		<br/>
		<p className='text-lg font-normal'>My journey involves exploring new technologies and frameworks to create innovative solutions that impact the digital landscape. Passionate about leveraging the power of the web and blockchain to transform ideas into tangible realities.
		</p> 
	  </div>
	  <div className='col-start-6 col-end-9 p-10 rounded-3xl border-r-8 border-b-8 border-l-2 border-t-2 border-black  mt-2 '>
			<Image src={'/avatar.jpeg'} alt='avatar' className='rounded-3xl' width={350} height={350} />
		
	  </div>
	  <div className='col-start-10 col-end-12 flex-col '>
		<h1 className='text-7xl font-extrabold'>10+</h1>
		<h1 className='text-muted-foreground text-xl'>Projects completed</h1>
		<br /><br /><br />
		<h1 className='text-7xl font-extrabold'>1.5</h1>
		<h1 className='text-muted-foreground text-xl'>Years of Experience</h1>
	  </div>
	</div>
	<div className='flex items-center justify-center mt-32'>
		<h1 className='text-8xl font-extrabold'>Skills and Experience</h1>
	</div>
	<div className='flex items-center justify-center mt-32'>
		<Skills />
	</div>
	<footer className='w-full text-center p-4 mt-4 border-t'>
				<p>&copy; {new Date().getFullYear()} Sumukh Joshi. All rights reserved.</p>
	</footer>
	</>
  )
}

export default DesktopView
