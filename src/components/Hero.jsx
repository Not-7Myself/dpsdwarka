import "../styles/hero.css";
import ScrollReveal from "scrollreveal";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".content", { delay: 250 });

    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div className="hero">
      <div className="content">
        <h1>Delhi Public School Dwarka</h1>
        <br />
        <h3>The Epitome of Education, in one place</h3>
      </div>
    </div>
  );
}
