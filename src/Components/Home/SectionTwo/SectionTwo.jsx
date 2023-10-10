
const SectionTwo = () => {
  return (
    <div className="max-w-xl mx-auto m-40 rounded-lg font-kalam bg-slate-300 p-20">
      <p className="text-start pb-10 text-5xl text-teal-800">Count down of th film event</p>
      <div className="flex gap-5 item-center">
  <div>
    <span className="countdown font-mono text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style={{"--value":46}}></span>
    </span>
    sec
  </div>
</div>
    </div>
  );
};

export default SectionTwo;