import { useMemo, useState, useRef, useEffect, useCallback, memo } from "react";
import "./ContactUs.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const CustomDropdown = memo(function CustomDropdown({
  options,
  name,
  value,
  onChange,
  label,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = useCallback(
    (selectedValue) => {
      onChange({ target: { name, value: selectedValue } });
      setOpen(false);
    },
    [onChange, name]
  );

  return (
    <div
      className={`input-group custom-dropdown ${open ? "open" : ""} ${
        value ? "has-value" : ""
      }`}
      ref={dropdownRef}
    >
      <div
        className={`dropdown-selected ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        tabIndex="0"
      >
        <input
          className="hidden-input"
          tabIndex={-1}
          value={value}
          placeholder=" "
          readOnly
        />
        <label className={value ? "floated" : ""}>{label}</label>
        <MdOutlineKeyboardArrowUp
          className={`arrow-icon ${open ? "rotate-up" : "rotate-down"}`}
        />
      </div>

      <div
        className={`dropdown-options ${open ? "dropdown-options-open" : ""}`}
      >
        {options.map((opt, i) => (
          <div
            key={i}
            className={`dropdown-option ${
              value === opt.title ? "selected" : ""
            }`}
            onClick={() => handleSelect(opt.title)}
          >
            {opt.title}
          </div>
        ))}
      </div>
    </div>
  );
});

function ContactUs() {
  const departments = useMemo(
    () => [
      { title: "Cardiology" },
      { title: "Neurology" },
      { title: "Pulmonology" },
      { title: "Medulla Spinalis" },
      { title: "Rheumatology" },
    ],
    []
  );

  const contactInfo = useMemo(
    () => [
      { icon: <FaPhoneAlt />, data: "01101533999" },
      { icon: <MdEmail />, data: "Test@gmail.com" },
      { icon: <FaLocationDot />, data: "Bani Swief" },
    ],
    []
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    serviceType: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  return (
    <div className="contact">
      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1753475347">
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

      <div className="contact-cta">
        <h1>Get In Touch</h1>
        <p>
          Questions? Appointments? Our specialists are here for you. Fill out
          the form below and we’ll get back to you shortly.
        </p>
      </div>

      <div className="form-main-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>First Name</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Last Name</label>
            </div>

            <CustomDropdown
              options={departments}
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              label="Service Type"
            />

            <div className="input-group">
              <textarea
                className="hoverEffect"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows="4"
              />
              <label>Message</label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-desc-container">
          <div className="bg-effect"></div>
          <div className="contact-desc-cta">
            <h2>Contact Information</h2>
            <p>
              We are happy to contact you soon to get your desired health care
            </p>
          </div>
          <ul>
            {contactInfo.map((d, ind) => (
              <li className="hoverEffect" key={ind}>
                {d.icon} {d.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
