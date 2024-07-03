import React from 'react'

const ProjectLayout = ({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) => {
  return (
	<div className='mt-24'>
	  {children}
	</div>
  )
}

export default ProjectLayout
