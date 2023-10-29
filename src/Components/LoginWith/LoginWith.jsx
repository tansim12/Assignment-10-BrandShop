import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuthContext from "../../useAuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginWith = () => {
  const { githubLogin, googleLogin } = useAuthContext();
  const loc = useLocation();
  const navigate = useNavigate();
  const handleLogin = (media) => {
    media()
      .then((res) => {
        // using jwt post method by protect API
        axios
          .post(
            "https://assingment-10-server-murex.vercel.app/jwt",
            { email: res?.user?.email },
            { withCredentials: true }
          )
          .then((result) => {
            if (result.data.success) {
              toast.success("Login successfully");
              navigate(loc?.state ? loc?.state : "/");
            }
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="my-4 hover:cursor-pointer">
        <div
          onClick={() => handleLogin(googleLogin)}
          className="border border-red-400 p-2 rounded-lg flex items-center justify-around mb-3"
        >
          <p className="text-2xl">
            <FcGoogle></FcGoogle>
          </p>
          <p className="font-bold">With Google Login </p>
        </div>

        <div
          onClick={() => handleLogin(githubLogin)}
          className="border  p-2 rounded-lg flex items-center justify-around mb-3"
        >
          <p className="text-2xl">
            <BsGithub></BsGithub>
          </p>
          <p className="font-bold">With Google Login </p>
        </div>
      </div>
    </div>
  );
};

export default LoginWith;
