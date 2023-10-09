const Cinematography = () => {
  return (
    <div className="font-kalam bg-[#eae0d5]">
      <h2 className="p-24 text-6xl text-center underline font-bold border-b-4 border-zinc-600">
      Cinematography
      </h2>
      <div className="relative ">
        <img
          className="w-full opacity-30"
          src="https://i.ibb.co/qBSD1hp/photo-2022-07-22-09-28-06.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-3/4 left-96">
        <p className="w-96 mb-16  text-xl">
          <span className="text-2xl font-semibold">
          Elevate your cinematography skills 
          </span> 
            with scholarships mentored by industry experts. Secure funding to pursue your passion for capturing captivating visuals, while receiving invaluable guidance from seasoned cinematographers. Embark on a visual storytelling journey like never before.Let's shape your future in film.
        </p>

        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-96 p-5"
                src="https://i.ibb.co/PMdGyQ9/Filmtech-FI-970x546.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cinematography Mentor</h2>
              <p className="w-96">
              Transform your cinematography ambitions with scholarships supported by industry mentors. Gain financial assistance to enhance your visual storytelling abilities, guided by experienced cinematographers. Immerse yourself in the art of capturing moments, light, and emotions on film. Join class to embark on an exciting journey into the world of cinematic visuals.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinematography;
