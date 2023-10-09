const EventHeld = ({ event }) => {
  const { title, description } = event || {};

  return (
    <div  data-aos="flip-left"
    data-aos-anchor-placement="top-bottom">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventHeld;
