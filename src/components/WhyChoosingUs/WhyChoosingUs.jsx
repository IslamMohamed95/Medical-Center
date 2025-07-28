import { memo, useMemo } from "react";
import "./WhyChoosingUs.css";

import { FcIdea } from "react-icons/fc";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoMdPulse } from "react-icons/io";
import { CgPlayButton } from "react-icons/cg";

import medicaBg from "../../assets/AboutSection/About.jpg";
import reportBg from "../../assets/AboutSection/report.jpg";
import labIBg from "../../assets/AboutSection/lap.jpeg";

function WhyChoosingUs() {
  const advantages = useMemo(
    () => [
      "Experienced & Caring Staff",
      "Advanced Medical Technology",
      "24/7 Emergency & ICU Services",
    ],
    []
  );

  return (
    <div className="why-us hexagon-bg">
      <div className="why-us-container">
        <div className="about-cta-container">
          <div className="about-cta">
            <h5>ABOUT US</h5>
            <h1>Why Patients Choose Our Center</h1>
            <IoMdPulse className="puls" />
            <p>
              We provide expert medical care with professionalism and
              compassion. Our center is trusted by hundreds of patients for its
              modern facilities, expert staff, and dedication to patient
              recovery and well-being.
            </p>
            <ul>
              {advantages.map((a) => (
                <li key={a}>
                  <IoCheckmarkCircleSharp /> {a}
                </li>
              ))}
            </ul>
            <div className="about-us-btn hoverEffect">
              Read More <FcIdea />
            </div>
          </div>
        </div>

        <div className="hexagon-wrapper">
          <CgPlayButton className="play-button" />

          {/* SVG Dot Pattern Background */}
          <svg className="dot-pattern-bg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="0.9" cy="0.9" r="0.9" fill="#51937b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>

          {/* Hexagon Image Containers */}
          <div className="hexagon-border">
            <div className="hexagon-container">
              <img src={medicaBg} alt="Medical Team" loading="lazy" />
            </div>
          </div>

          <div className="hexagon-border cutome-border-two">
            <div className="hexagon-container customer-hexagon-two">
              <img src={reportBg} alt="Medical Report" loading="lazy" />
            </div>
          </div>

          <div className="hexagon-border cutome-border-three">
            <div className="hexagon-container customer-hexagon-three">
              <img src={labIBg} alt="Lab Equipment" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WhyChoosingUs);
