import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SectionOne = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <img
        className="w-full h-[80vh] opacity-80"
        src="https://i.ibb.co/X8jp90V/noom-peerapong-2uw-FEAGUm6-E-unsplash.jpg"
        alt=""
      />
      <div className="relative ">
        <p
          data-aos="fade-down-right"
          data-aos-anchor-placement="top-bottom"
          className="text-right text-white bg-stone-800 m-10 text-5xl lg:text-7xl absolute right-9 bottom-7 lg:bottom-52 mb-32 font-lobster"
        >
          Start Your journey from <br />Film Forecast
        </p>
      </div>
    </div>
  );
}

export default SectionOne;