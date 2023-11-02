
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../useAuthContext";
import LoadingSpinar from "../Components/LoadingSpinar/LoadingSpinar";



const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthContext();
  const loc  = useLocation()

  if (loading) {
    return (
      <div >
        <LoadingSpinar></LoadingSpinar>
        
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={loc.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
