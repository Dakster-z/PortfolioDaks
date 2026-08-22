import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const scrollToHash = window.setTimeout(() => {
      if (!hash) {
        return;
      }

      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(scrollToHash);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
