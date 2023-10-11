import { useContext, useState } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    if(email,password){
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.massage);
      });
    }
  

  };

  const handleGoogleRegister = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  const notification = () => toast("Successfully Login");

  return (
    <div className="bg-teal-900 font-kalam h-[110vh]">
      <p className="text-5xl font-bold text-center text-white p-10">LOGIN</p>
      <p className="text-white text-center p-4">{error}</p>
      <form
        onSubmit={handleLogin}
        className="border shadow-lg bg-white rounded-lg max-w-xl mx-auto p-10"
      >
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
        <div className="form-control mt-6 " onClick={notification}>
          <button className="btn btn-neutral">
            Login
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
        <div className="form-control mt-6">
          <button onClick={handleGoogleRegister} className="btn btn-neutral">
            Google
          </button>
        </div>
      </form>
      <p className="text-white text-center text-xl p-2">
        Don't have an account ?{" "}
        <Link to="/register" className="text-teal-500 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
