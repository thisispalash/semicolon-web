'use client';

import clsx from 'clsx';

import { lipsum } from './lipsum';

function displayStory(story: string) {
  // Split the story by double newlines to separate paragraphs
  const paragraphs = story.trim().split('\n\n');
  
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-justify">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );
}


export default function ScrollReader() {

  return (
    <div 
      className={clsx(
        'w-full h-full',
        'font-user font-light text-lg',
        'leading-relaxed',
      )}
    >
      {displayStory(lipsum)}
    </div>
  );
}