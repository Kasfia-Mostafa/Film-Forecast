const Premier = ({movie}) => {

  const {name,img_url,price} = movie || {}
  return (
    <div>
      <div className="shadow-xl relative w-[45vh] h-[200px] rounded-md ease-in-out duration-300 p-5 bg-[#b8dbd9] m-3 hover:h-[320px] hover:opacity-1 hover:scale-y-110">
        <div className="relative w-56 h-[40vh] scale-125 z-50">
          <img
            className="w-full rounded-md shadow-lg ml-7"
            src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>

        <div className="bottom-14 left-28 absolute p-1 text-center text-sm scale-y-150 ease-in-out duration-300 text-[#2f4550] font-kalam">
          <h2 className="text-center">{name}</h2>
          <p>{price} $</p>
          <button className="h-6 bg-white w-20 rounded-lg cursor-pointer">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Premier;
