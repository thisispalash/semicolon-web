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

  // Close sidebar when clicking outside
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

  // remove overflow when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    // Overlay
    <div 
      style={{ backgroundColor: 'rgba(244, 245, 246, 0.75)' }}
      className={clsx(
        'fixed inset-0 z-50 h-screen w-screen p-4',
        'overflow-hidden',
      )}
    >
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={clsx(
          'h-full w-56 z-55 p-4',
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
          <span className="">See Mood</span>
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
    </div>


  );

}
