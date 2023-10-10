import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = () => {
  const {user,loading} = useContext(AuthContext);

  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(user){
    return children;
  }
  return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;