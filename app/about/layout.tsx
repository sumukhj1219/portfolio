import React from 'react'

const ResumeLayout = ({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) => {
  return (
	<div>
	  {children}
	</div>
  )
}

export default ResumeLayout
