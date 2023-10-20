import { Vortex } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../useAuthContext";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuthContext();
  const loc  = useLocation()

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={loc.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
