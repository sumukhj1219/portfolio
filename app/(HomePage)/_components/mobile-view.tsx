import React from 'react';
import Wave from './wave';
import MobileViewAvatar from './mobile-view-image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sidebar } from './mobile-sidebar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Image from 'next/image';

const MobileView = () => {
	const components: { title: string; logo: any }[] = [
		{
			title: "SEARCH ENGINE OPTIMIZE",
			logo: <Image src={'./seo.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "WEBSITES AND PLATFORMS",
			logo: <Image src={'./cross-platform.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "PURSUING DEGREE",
			logo: <Image src={'./engineer-degree.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "ATTEND WEBINARS AND EVENTS",
			logo: <Image src={'./coding.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "PREPARING FOR GSOC 2025",
			logo: <Image src={'./commit.png'} alt='seo-image' width={45} height={45} />,
		}
	];

	return (
		<>
			<nav className='m-2 '>
				<Sidebar />
			</nav>
			<div className='pt-14 pr-1 flex flex-col items-center justify-center '>
				<MobileViewAvatar />
				<div className='flex flex-col items-center text-center'>
					<h1 className='text-md flex'>
						Hello Everyone <Wave />
					</h1>
					<h1 className='text-5xl text-black font-extrabold'>
						Im SUMUKH
					</h1>
					<div className='sm:hidden flex flex-row items-center mt-10 gap-2'>
						<Link href={'mailto:sumukhjoshi4@gmail'} >
							<Button className='rounded-3xl border-r-2 border-b-2 border-black' size={'sm'}>
								Contact Info
							</Button>
						</Link>
						<Link href={'/cv'} >
							<Button className='rounded-3xl border-r-2 border-b-2 border-black' size={'sm'} variant={'outline'}>
								Download CV
							</Button>
						</Link>
					</div>
					<div className='flex gap-x-10 ml-2 pt-10 '>
						<Link href={'https://www.linkedin.com/in/sumukh-joshi-262515292/'}>
							<LinkedInIcon />
						</Link>
						<Link href={'https://github.com/sumukhj1219'}>
							<GitHubIcon />
						</Link>
						<Link href={'https://leetcode.com/u/sumukhjoshi75/'}>
							<CodeIcon />
						</Link>
					</div>
				</div>
			</div>
			<div className='block grid-rows-5 m-6'>
				<h1 className='font-extrabold text-xl underline decoration-4 decoration-blue-500'>What I Do</h1>
				{components.map((items, index) => (
					<span key={index} className='flex items-center justify-start m-4 gap-x-2 p-4 hover:bg-muted rounded-xl'>
						<h1>{items.logo}</h1>
						<h1 className='font-medium text-lg'>{items.title}</h1>
					</span>
				))}
			</div>
			<footer className='w-full text-center p-4 mt-4 border-t'>
				<p>&copy; {new Date().getFullYear()} Sumukh Joshi. All rights reserved.</p>
			</footer>
		</>
	);
};

export default MobileView;
