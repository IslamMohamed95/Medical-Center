import React, { useContext, memo, useMemo } from "react";
import HeartViewer from "../HeartViewer/HeartViewer";
import "./Hero.css";
import { SocialContext } from "../../context/SocialMedialContext";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";

const Hero = () => {
  const { icons } = useContext(SocialContext);

  const keyMetrics = useMemo(
    () => [
      { title: "Happy Patients", number: 500 },
      { title: "Mecial Rooms", number: 150 },
      { title: "Award Win", number: 50 },
    ],
    []
  );

  const glowClassNames = useMemo(
    () => ["one", "two", "three", "four", "five"],
    []
  );

  return (
    <section className="hero">
      {/* Red blurred blob */}
      <div className="blurred-blob" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#DB222A"
            d="M17.6,-27C25.7,-25.9,37.1,-26.9,42.3,-22.8C47.5,-18.7,46.6,-9.3,48.6,1.2C50.6,11.7,55.6,23.3,51.1,28.6C46.5,33.8,32.3,32.7,22.2,30.1C12.1,27.6,6.1,23.7,1.2,21.6C-3.7,19.5,-7.3,19.3,-20.6,23.7C-33.9,28.1,-56.8,37,-61.3,33.9C-65.8,30.7,-51.9,15.3,-41.9,5.8C-32,-3.8,-26,-7.7,-25.8,-18.4C-25.7,-29.2,-31.5,-46.9,-28.2,-50.7C-24.8,-54.6,-12.4,-44.7,-3.8,-38.1C4.8,-31.5,9.5,-28.1,17.6,-27Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="hero-content-container">
        {/* Glow background layers */}
        {glowClassNames.map((name) => (
          <div key={name} className={`glow-circle ${name}`} />
        ))}

        {/* Left side content */}
        <div className="hero-left">
          <div className="hero-cta-container">
            <h2>Expert Care for Every Stage of Life</h2>
            <p>
              From preventive screenings to advanced treatments, we offer a full
              range of services designed to support your health at every age
              with the latest in medical innovation.
            </p>

            <div className="hero-btn hoverEffect">
              <p>Watch Intro.</p>
              <IoMdArrowDropright />
            </div>

            <div className="hero-counter">
              {keyMetrics.map((k, i) => (
                <React.Fragment key={k.title}>
                  <div>
                    <h3>{k.title}</h3>
                    <span>
                      <FaPlus />
                      <CountUp end={k.number} duration={2} />
                    </span>
                  </div>
                  {i !== keyMetrics.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Heart Viewer */}
        <div className="hero-heart-container">
          <HeartViewer />
        </div>

        {/* Social Icons */}
        <div className="hero-social-icons">
          <hr />
          <ul>
            {icons.map((i, ind) => (
              <li className={`hoverEffect ${i.className}`} key={ind}>
                {i.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Green blurred blob */}
      <div className="blurred-blob-green" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#51937B"
            d="M33.3,-63.6C34.6,-56.9,21.2,-30.7,27,-16.8C32.8,-3,57.8,-1.5,57.2,-0.3C56.6,0.8,30.4,1.6,17.8,3.7C5.2,5.9,6.3,9.4,5.6,23.5C4.9,37.7,2.5,62.6,0.2,62.3C-2.1,62,-4.2,36.5,-13.4,27.2C-22.6,17.9,-39,24.9,-41.9,23.1C-44.9,21.3,-34.6,10.6,-36.6,-1.2C-38.7,-13,-53.1,-26,-55.3,-36.8C-57.5,-47.5,-47.4,-56,-36.1,-57C-24.8,-57.9,-12.4,-51.3,1.8,-54.4C16,-57.5,32,-70.3,33.3,-63.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default memo(Hero);
