import { useEffect, useState } from "react";
import Premier from "./Premier";

const FilmPremier = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("premiers.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="bg-[#f4f4f9]">
      <h2 className="text-center text-5xl font-bold font-kalam pt-14 underline">Movie Premier</h2>
      <div className="max-w-6xl mx-auto mt-32">
        <div className="grid grid-cols-3 gap-10">
          {movies?.map((movie) => (
            <Premier key={movie.id} movie={movie}></Premier>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmPremier;
