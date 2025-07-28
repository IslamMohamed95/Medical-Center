import "./Services.css";
import DepartmentCard from "../DepartmentCard/DepartmentCard";
import { useMemo } from "react";

function Services() {
  const departments = useMemo(
    () => [
      {
        model: "/models/heartT.glb",
        title: "Cardiology",
        description:
          "Focused on the diagnosis and treatment of heart diseases and disorders, including ECG, echocardiograms, and cardiac care services.",
      },
      {
        model: "/models/brain.glb",
        title: "Neurology",
        description:
          "Specialized in disorders of the brain and nervous system, offering expert care for stroke, epilepsy, migraines, and neurodegenerative conditions.",
      },
      {
        model: "/models/pulmones.glb",
        title: "Pulmonology",
        description:
          "Dedicated to the respiratory system, treating lung-related conditions such as asthma, COPD, bronchitis, and pulmonary infections.",
      },
      {
        model: "/models/Medulla-Spinalis.glb",
        title: "Medulla Spinalis",
        description:
          "Focused on spinal cord health and injuries, supporting motor and sensory functions, as well as spinal disorders and rehabilitation.",
      },
      {
        model: "/models/DNA.glb",
        title: "Rheumatology",
        description:
          "Deals with autoimmune and inflammatory diseases affecting joints and connective tissues, such as arthritis, lupus, and fibromyalgia.",
      },
    ],
    []
  );

  return (
    <div className="services-s">
      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1753365015">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* Main Content */}
      <div className="services-s-container">
        <div className="services-first-part">
          <h1>Different Department To Serve Your Health</h1>
          <p>
            We provide a wide range of medical departments, each dedicated to
            delivering expert care and personalized treatment.
          </p>

          <button className="hoverEffect">Begin Treatment</button>
        </div>
        <div className="services-s-cta-container">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.title} // more stable than index
              model={dept.model}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="services-cta-booking">
        <p>Choose Your Desired Health Key</p>
        <button className="hoverEffect">Begin Treatment</button>
      </div>
    </div>
  );
}

export default Services;
