import Image from 'next/image'
import React from 'react'

const AvatarComponent = () => {
  return (
    <div className='m-10'>
      <div className='bg-white rounded-full overflow-hidden w-80 h-80'>
        <Image
          src={'/avatar.jpeg'}
          alt='avatar'
          width={320}
          height={320}
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default AvatarComponent
