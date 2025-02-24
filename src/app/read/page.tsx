'use client';

import clsx from 'clsx';

import { useReader } from '@/context/ReaderContext';

import ScrollReader from '@/component/reader/ScrollReader';

export default function ReadPage() {
  
  const { showHSL, getBackground, getForeground } = useReader();
  
  return (
    <main
      style={showHSL ? {
        backgroundColor: getBackground(),
        color: getForeground(),
      } : {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
      className={clsx(
        'w-full min-h-screen overflow-y-auto',
        'pl-48 py-20 pr-72',
      )}
    >
      <ScrollReader />
    </main>
  );
}