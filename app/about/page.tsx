'use client'
import Image from 'next/image'
import React from 'react'
import Skills from './_components/level'
import DesktopView from './_components/desktop-view'
import MobileView from './_components/mobile-view'

const AboutPage = () => {
  return (
	<>
	<div className='hidden md:block'>
		<DesktopView />
	</div>
	<div className='block md:hidden'>
		<MobileView />
	</div>
	</>
  )
}

export default AboutPage
