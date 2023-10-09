import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="h-fit bg-[#22333B] font-kalam text-white p-10">
      <h2 className="text-7xl text-center">Gallery</h2>
      <p className="text-xl text-center text-[#586f7c] mt-4 mb-16">
        Some moments from the previous year
      </p>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 shadow-xl">
          <figure className="gap-4">
            <div className="">
                {gallery.map((photo) => (
                  <img
                    className="h-fit p-5 w-[50vw] mx-auto"
                    key={photo.id}
                    src={photo.url}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  ></img>
                ))}
              </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
