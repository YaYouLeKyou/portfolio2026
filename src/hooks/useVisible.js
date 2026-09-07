import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible]. Use to pause expensive work (e.g. WebGL frameloops)
 * when the element is out of the viewport.
 */
const useVisible = (rootMargin = "200px") => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, visible];
};

export default useVisible;