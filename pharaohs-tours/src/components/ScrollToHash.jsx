import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there's no hash, you can choose to do nothing
    if (!hash) return;

    // hash looks like "#destinations"
    const id = hash.slice(1);

    // Wait for DOM to paint (important when content loads after route change)
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash, pathname]);

  return null;
}
