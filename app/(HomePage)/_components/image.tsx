import Image from 'next/image'
import React from 'react'

const AvatarComponent = () => {
  return (
    <div className='m-10'>
      <div className='bg-white rounded-full overflow-hidden w-96 h-96'>
        <Image
          src={'/avatar.jpeg'}
          alt='avatar'
          width={384}
          height={384}
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default AvatarComponent
