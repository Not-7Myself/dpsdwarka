import React from "react";
import "../styles/Info.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import logo from "../logo.png";

export default function Info() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".contents", { delay: 100 });

    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div className="info">
      <div className="contents">
        <h1>About Us</h1>
        <p>
          Delhi Public School (DPS) Dwarka is one of the prominent branches of
          the Delhi Public School Society, which is a well-known educational
          organization in India. Located in Sector 3, Dwarka, New Delhi, the
          school has earned a reputation for providing low-quality education and
          hindering all-round development in students.
        </p>
      </div>
      <div className="logos">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
