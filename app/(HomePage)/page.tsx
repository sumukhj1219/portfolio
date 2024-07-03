import React from 'react';
import AvatarComponent from './_components/image';
import Wave from './_components/wave';
import MobileView from './_components/mobile-view';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

const HomePage = () => {
	const components: { title: string; logo: any }[] = [
		{
			title: "SEARCH ENGINE OPTIMIZE",
			logo: <Image src={'/seo.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "WEBSITES AND PLATFORMS",
			logo: <Image src={'/cross-platform.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "PURSUING DEGREE",
			logo: <Image src={'/engineer-degree.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "ATTEND WEBINARS AND EVENTS",
			logo: <Image src={'/coding.png'} alt='seo-image' width={45} height={45} />,
		},
		{
			title: "PREPARING FOR GSOC 2025",
			logo: <Image src={'/commit.png'} alt='seo-image' width={45} height={45} />,
		}
	];	

	return (
		<>
		<div className='block sm:hidden'>
				<MobileView />
			</div>
			<div className='hidden sm:block'>
				<div className='sm:pt-20 sm:items-center sm:gap-2 flex'>
					<AvatarComponent />
					<div className='flex sm:flex-row flex-col items-center'>
						<div className='flex flex-col items-center sm:items-start sm:ml-10'>
							<h1 className='text-xl flex'>
								Hello Everyone <Wave />
							</h1>
							<h1 className='text-7xl text-black font-extrabold'>
								I&aposm SUMUKH
							</h1>
							<div className='flex flex-row items-center mt-10 gap-20'>
								<Link href={'mailto:sumukhjoshi4@gmail'} >
									<Button className='rounded-3xl border-r-2 border-b-2 border-black' size={'lg'}>
										Contact Info
									</Button>
								</Link>
								<Link href={'/cv'} >
									<Button className='rounded-3xl border-r-2 border-b-2 border-black' size={'lg'} variant={'outline'}>
										Download CV
									</Button>
								</Link>
							</div>
							<div className='flex gap-x-10 ml-20 pt-10 '>
								<Link href={'https://www.linkedin.com/in/sumukh-joshi-262515292/'}>
									<LinkedInIcon fontSize='large'/>
								</Link>
								<Link href={'https://github.com/sumukhj1219'}>
									<GitHubIcon fontSize='large' />
								</Link>
								<Link href={'https://leetcode.com/u/sumukhjoshi75/'}>
									<CodeIcon fontSize='large'/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='m-4'>
					<h1 className='font-extrabold m-6 text-xl underline decoration-4 decoration-blue-500'>What I Do</h1>
					<div className='grid grid-cols-3'>
						{components.map((items, index) => (
							<span key={index} className='flex items-center justify-start m-1 gap-x-6 p-4 hover:bg-muted rounded-xl'>
								<h1>{items.logo}</h1>
								<h1 className='font-medium text-lg'>{items.title}</h1>
							</span>
						))}
					</div>
				</div>
				<footer className='w-full text-center p-4 mt-4 border-t'>
					<p>&copy; {new Date().getFullYear()} Sumukh Joshi. All rights reserved.</p>
				</footer>
			</div>
		</>
			
	);
};

export default HomePage;
