import { useEffect, useState } from "react";
import EventHeld from "../EventHeld";
import Aos from "aos";
import "aos/dist/aos.css";

const EventHandling = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/eventHeld.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-slate-900">
      <div className="max-w-5xl mx-auto p-10 font-kalam">
        <h2 className="text-5xl text-center font-bold m-10 text-[#b8dbd9]">
          Main Events
        </h2>
        {
          <div className="grid lg:grid-cols-2 gap-10">
            {events?.map((event) => (
              <EventHeld key={event.id} event={event}></EventHeld>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default EventHandling;
