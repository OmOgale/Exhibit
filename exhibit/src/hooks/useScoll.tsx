import { useRef } from "react";

const useScroll = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const executeScroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return [ref, executeScroll];
};

export default useScroll;
