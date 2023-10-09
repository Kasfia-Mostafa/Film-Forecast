
const Convocation = ({guest}) => {
const {name,img_url,hall,time} = guest || {}

  return (
    <div className="w-2/4 mx-auto">
      <div className="card card-side bg-[#b8dbd9] shadow-xl">
  <figure><img className="h-48 w-40" src={img_url}/></figure>
  <div className="card-body text-end">
    <h2 className="card-title text-2xl underline">{name}</h2>
    <div className="mt-8 text-xl">
      <p>Location: Hall-{hall}</p>
      <p>Time:{time} pm</p>
      <p></p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Convocation;