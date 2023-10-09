const Submission = () => {
  return (
    <div className="font-kalam max-w-6xl mx-auto m-24">
      <h2 className="text-5xl text-center font-bold m-10 bg-[#b8dbd9] h-10">
        Film Submission
      </h2>
      <div className="grid grid-cols-2">
        <div className="text-[#586f7c] border-4 mr-5">
          <h2 className="text-4xl mb-5 font-bold text-[#2f4550] text-center mt-16">
            Rules
          </h2>
          <p className="text-2xl flex justify-center items-center">
            <ul className="list-disc">
              <li>Film has to be 10 minutes long</li>
              <li>Genre required</li>
              <li>Age rated 7+</li>
              <li>Production details mandatory</li>
              <li>Required school permission signature</li>
            </ul>
          </p>
        </div>

        <div>
          <div className="hero min-h-screen bg-[#586f7c]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#b8dbd9] border-none">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="null name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Production Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="production name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="title"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Video Link</span>
                    </label>
                    <input
                      type="text"
                      placeholder="link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Genre</span>
                    </label>
                    <input
                      type="text"
                      placeholder="genre"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline btn-neutral">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
