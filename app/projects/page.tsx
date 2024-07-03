import React from 'react';
import { Cards } from './_components/project-cards';
import { MobileCards } from './_components/(mobile)/mobile-view';
import { Sidebar } from '../(HomePage)/_components/mobile-sidebar';

const ProjectPage = () => {
  return (
    <>
	  <nav className='fixed md:hidden block top-0 left-0 p-2'>
		<Sidebar />
	  </nav>
      <div className='flex items-center justify-center'>
        <h1 className='font-extrabold text-pretty md:text-7xl text-xl flex'>
          Transforming Ideas into Reality 
        </h1>
      </div>
      
      {/* Mobile Cards Section */}
	  
      <div className='sm:grid grid-rows-5 md:hidden'>
        <MobileCards />
      </div>
      
      {/* Desktop Cards Section */}
      <div className='hidden md:grid grid-cols-2'>
        <Cards />
      </div>
	  <footer className='w-full text-center p-4 mt-4 border-t'>
				<p>&copy; {new Date().getFullYear()} Sumukh Joshi. All rights reserved.</p>
			</footer>
    </>
  );
};

export default ProjectPage;
