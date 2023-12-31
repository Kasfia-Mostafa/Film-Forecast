import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <img
        className="w-[120vw] lg:w-full h-full"
        src="https://i.ibb.co/1QfC7yq/film-projector-dark-background-close-up-old-retro-things-shoot-with-vintage-style-colors-toned.jpg"
        alt=""
      />
      <div className="relative  ">
        <p
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          className="text-right text-white text-4xl right-4 bottom-1 lg:text-9xl absolute lg:right-9 lg:bottom-96 mb-32 font-lobster"
        >
          Film <br /> Forecast
        </p>
      </div>
    </div>
  );
};

export default Banner;
