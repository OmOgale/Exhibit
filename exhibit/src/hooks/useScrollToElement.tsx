import { useRef } from 'react';

function useScrollToElement() {
  const scrollToRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return [scrollToRef, scrollToElement];
}

export default useScrollToElement;
