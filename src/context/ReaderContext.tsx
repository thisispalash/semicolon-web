'use client';

import { createContext, useContext, useState } from 'react';


interface ReaderContextType {
  showHSL: boolean;
  setShowHSL: (showHSL: boolean) => void;
  getForeground: () => string;
  getBackground: () => string;
}


const ReaderContext = createContext<ReaderContextType | undefined>(undefined);


export default function ReaderProvider({ children }: { children: React.ReactNode }) {

  const [ hue, setHue ] = useState(60);
  const [ saturation, setSaturation ] = useState(37);
  const [ lightness, setLightness ] = useState(37);
  const [ showHSL, setShowHSL ] = useState(false);

  const getForeground = () => {
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`;
  }

  const getBackground = () => {
    // TODO: This doesn't work well with the switch, on active, the thumb becomes invisible due to low opacity
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.1)`;
  }


  return (
    <ReaderContext.Provider value={{
      showHSL,
      setShowHSL,
      getForeground,
      getBackground,
    }}>
      {children}
    </ReaderContext.Provider>
  );
}


export function useReader() {
  const context = useContext(ReaderContext);
  if (!context) {
    throw new Error('useReader must be used within a ReaderProvider');
  }
  return context;
}