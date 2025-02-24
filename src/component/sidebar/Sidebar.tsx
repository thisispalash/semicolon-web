'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import ReaderSidebar from './ReaderSidebar';


function SidebarIcon() {
  
  /* Courtesy of Tabler Icons (https://tabler.io/icons/icon/menu) */

  return (
    <svg  
      xmlns="http://www.w3.org/2000/svg"  
      width={24}  
      height={24}  
      viewBox="0 0 24 24"  
      fill="none"  
      stroke="currentColor"  
      strokeWidth={2}  
      strokeLinecap="round"  
      strokeLinejoin="round"  
      className="icon icon-tabler icons-tabler-outline icon-tabler-menu">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 8l16 0" />
        <path d="M4 16l16 0" />
      </svg>
  );
}


export default function Sidebar() {

  const path = usePathname();

  const [isReaderSidebarOpen, setIsReaderSidebarOpen] = useState(false);

  const handleClick = () => {

    if (path === '/read' && !isReaderSidebarOpen) {
      setIsReaderSidebarOpen(!isReaderSidebarOpen);
    }

  }

  return (
    <>
      <div 
        className={clsx(
          'fixed top-0 left-0 h-16 w-16 z-10 m-6',
          'cursor-pointer',
        )}
        onClick={handleClick}
      >
        {!isReaderSidebarOpen && <SidebarIcon />}
      </div>
      <ReaderSidebar 
        isOpen={isReaderSidebarOpen}
        onClose={() => setIsReaderSidebarOpen(false)}
      />
    </>
  );

}