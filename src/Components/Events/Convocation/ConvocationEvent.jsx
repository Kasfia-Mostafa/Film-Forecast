import { useEffect, useState } from "react";
import Convocation from "./Convocation";

const ConvocationEvent = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch("/public/guests.json")
      .then((res) => res.json())
      .then((data) => setGuests(data));
  }, []);

  return <div className="font-kalam">
    <h2 className="text-5xl bg-[#2f4550] text-white text-center m-2 p-4">Convocation</h2>
            <div className="grid grid-cols-1 gap-8 h-[120vh] bg-[#2f4550] p-10"> 
            <h2 className="text-4xl text-center text-[#586f7c] font-bold">Guests</h2>
            <p className="text-2xl text-center">Directors who had major hit in film industry are here to give you to share their journey</p>
          {guests?.map((guest) => (
            <Convocation key={guest.id} guest={guest}></Convocation>
          ))}
        </div>
  </div>;
};

export default ConvocationEvent;
