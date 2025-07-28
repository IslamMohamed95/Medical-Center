import { memo, useMemo } from "react";
import "./TrustedClients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Importing Clients
import client1 from "../../assets/TrustedClients/Medtronic.png";
import client2 from "../../assets/TrustedClients/Medtronic.png";
import client3 from "../../assets/TrustedClients/Medtronic.png";
import client4 from "../../assets/TrustedClients/Medtronic.png";
import client5 from "../../assets/TrustedClients/Medtronic.png";
import client6 from "../../assets/TrustedClients/synergita.webp";
import client7 from "../../assets/TrustedClients/synergita.webp";
import client8 from "../../assets/TrustedClients/synergita.webp";
import client9 from "../../assets/TrustedClients/synergita.webp";

function TrustedClients() {
  const clients = useMemo(
    () => [
      client1,
      client2,
      client3,
      client4,
      client5,
      client6,
      client7,
      client8,
      client9,
    ],
    []
  );

  return (
    <div className="trusted-clients">
      <h1 className="trusted-title">Trusted By Hundreds of Organisations</h1>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        spaceBetween={40}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1200}
        breakpoints={{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 1 },
          420: { slidesPerView: 1 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}
        className="trusted-swiper"
      >
        {clients.map((logo, i) => (
          <SwiperSlide key={`client-${i}`}>
            <img
              src={logo}
              alt={`Client Logo ${i + 1}`}
              className="client-logo"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(TrustedClients);
