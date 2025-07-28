import { memo, useMemo } from "react";
import "./HowItWork.css";

import { TbCategoryFilled } from "react-icons/tb";
import { FaUserDoctor, FaHandHoldingMedical } from "react-icons/fa6";
import { HiCalendarDateRange } from "react-icons/hi2";

function HowItWork() {
  const details = useMemo(
    () => [
      {
        icon: <TbCategoryFilled />,
        title: "Select Service",
        desc: "Explore our wide range of medical services and choose the one that fits your health needs. From general checkups to specialized treatments, we’ve got you covered.",
      },
      {
        icon: <FaUserDoctor />,
        title: "Choose A Doctor",
        desc: "Browse our team of experienced specialists and select the doctor that best suits your medical needs. View their profiles, specialties, and availability — all in one place.",
      },
      {
        icon: <HiCalendarDateRange />,
        title: "Booking Meeting",
        desc: "Schedule your appointment with ease by selecting your preferred doctor, service, and time. Our simple booking process ensures you get the care you need, when you need it.",
      },
      {
        icon: <FaHandHoldingMedical />,
        title: "Get Treatment",
        desc: "Receive expert medical treatment tailored to your condition. Our dedicated team ensures a smooth and comfortable experience from diagnosis to recovery.",
      },
    ],
    []
  );

  return (
    <div className="how-work">
      <h1>How It Works</h1>
      <h4>
        Book your appointment in <span>four easy steps</span>
      </h4>
      <div className="how-work-cta-container">
        {details.map(({ icon, title, desc }, index) => (
          <div className="d-contaner-white-border" key={index}>
            <span className="d-one"></span>
            <span className="d-two"></span>

            <div className="d-container">
              <div className="d-cta-container">
                {icon}
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(HowItWork);
