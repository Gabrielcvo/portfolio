import "./intro.scss";
import { init } from "ityped";

import myImage from "../../assets/myImage.png";
import arrowDown from "../../assets/arrowDown.png";
import { useEffect, useRef } from "react";

export function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["React JS", "React Native"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={myImage} alt="Me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am</h2>
          <h1>Gabriel Santiago</h1>
          <h3>
            Front End Developer <span ref={textRef} />
          </h3>
        </div>
        <a href="portfolio">
          <img src={arrowDown} alt="Arrow Down" />
        </a>
      </div>
    </div>
  );
}
