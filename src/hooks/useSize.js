import { useEffect } from "react";
import { useState } from "react";

export default function useSize(ref) {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current == null) return;
    const obsever = new ResizeObserver((entries) => {
      setSize(entries.contactRect);
    });
    obsever.observe(ref.current);
    return () => {
      obsever.disconnect();
    };
  }, []);

  return size;
}
