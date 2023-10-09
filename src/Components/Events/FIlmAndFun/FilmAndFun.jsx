const FilmAndFun = () => {
  return (
    <div className="font-kalam">
      <div className="hero min-h-screen bg-[#22333b] p-60">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-[#b8dbd9]">
            <h1 className="text-5xl font-bold">Play TO win</h1>
            <p className="py-6">
              Answer some quizzes and win ticket for premier film of your choice
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Is Harry potter a wizard ?</span>
                </label>
                <input
                  type="text"
                  placeholder="Answer"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Can Superman fly ?</span>
                </label>
                <input
                  type="text"
                  placeholder="Answer"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Is Barbie about dolls ?</span>
                </label>
                <input
                  type="text"
                  placeholder="Answer"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Is Frozen about fire ?</span>
                </label>
                <input
                  type="text"
                  placeholder="Answer"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Is Thanos villain in Avengers ?
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Answer"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-ghost"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Submit
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">
                      All the best
                    </h3>
                    <p className="py-4 text-center">
                      We will email to the winners for film ticket
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmAndFun;
