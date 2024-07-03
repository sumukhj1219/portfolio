import React from 'react'
import Image from 'next/image'

const Wave = () => {
  return (
	<div className='ml-2'>
	  <Image
		src={'./wave.png'}
		width={25}
		height={25}
		alt='wave-image'
	  />
	</div>
  )
}

export default Wave
