import { Link, NavLink } from "react-router-dom";
import { GiFilmSpool } from 'react-icons/gi';
import { useContext } from "react";
import { AuthContext } from "../../../Hooks/AuthProvider";


const Navbar = () => {
  const {user} = useContext(AuthContext)

const navLinks = <>
<li><NavLink to='/' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#81b29a]" : ""}>Home</NavLink></li>
<li><NavLink to='/gallery' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#81b29a] underline" : ""}>Gallery</NavLink></li>
<li><NavLink to='/history' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#81b29a]" : ""}>History</NavLink></li>
</>

const event = <>
<li><NavLink to='/convocation'>Convocation</NavLink></li>
<li><NavLink to='/scholarships'>Scholarships</NavLink></li>
<li><NavLink to='/cinematography'>Cinematography</NavLink></li>
<li><NavLink to='/premier'>Film Premier</NavLink></li>
<li><NavLink to='/submission'>Film Submission</NavLink></li>
<li><NavLink to='/fnf'>Film and Fun</NavLink></li>
</>


  return (
    <div>
      <div className="navbar bg-gray-900 font-kalam">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"></ul>
    </div>
    <GiFilmSpool className="text-4xl ml-5 font-bold text-white"></GiFilmSpool>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {navLinks}
      <li tabIndex={0}>
        <details>
          <summary>Events</summary>
          <ul className="w-36 bg-gray-800">
            {event}
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <button className="btn btn-ghost text-white">Sign Out</button>
      :
    <Link to='/login' className="btn btn-ghost text-white">Login</Link>
    }
  </div>
</div>
    </div>
  );
};

export default Navbar;