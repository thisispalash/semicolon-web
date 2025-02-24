'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import { useReader } from '@/context/ReaderContext';

import { Switch } from '@/component/primitive/Switch';

export interface ReaderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function ReaderSidebar({ isOpen, onClose }: ReaderSidebarProps) {

  const { showHSL, setShowHSL } = useReader();
  const { getForeground, getBackground } = useReader();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className={clsx(
        'fixed top-0 left-0 h-auto w-56 z-10 p-4 m-4',
        'bg-background text-foreground font-system text-lg',
        'flex flex-col justify-between',
        'rounded-lg border border-foreground shadow-lg',
      )}
    >

      {/* Show HSL Switch */}
      <div className={clsx(
        'w-full flex flex-row items-center justify-between',
        'hover:font-bold',
      )}>
        <span className="">Set Mood</span>
        <Switch 
          checked={showHSL} 
          onCheckedChange={setShowHSL} 
          activeColor={getForeground()} 
          inactiveColor={getBackground()}
        />
      </div>

      {/* Message author */}
      <div className={clsx(
        'w-full flex flex-row justify-between',
        'hover:font-bold',
      )}>
        <span className="">Message</span>
      </div>

    </div>
  );

}
