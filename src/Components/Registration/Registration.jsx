import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email.password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const notify = () => toast("Successfully register");

  return (
    <div className="bg-teal-900 font-kalam h-[110vh]">
      <p className="text-5xl font-bold text-center text-white p-10">
        Registration
      </p>
      <form
        onSubmit={handleRegister}
        className="border shadow-lg bg-white rounded-lg max-w-xl mx-auto p-10"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="email"
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
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral" onClick={notify}>
            Register
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
        {/* <div className="form-control mt-6">
          <button
            onClickCapture={handleGoogleRegister}
            className="btn btn-neutral"
            onClick={notify}
          >
            Google
          </button>
        </div> */}
      </form>
      <p className="text-white text-center text-xl p-2">
        Already have an account ?{" "}
        <Link to="/login" className="text-teal-500 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registration;
