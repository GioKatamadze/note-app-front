import { Outlet } from "react-router-dom";
import SignIn from "../Pages/sign-in/signin.jsx";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  if (!localStorage.token) {
    navigate("/signin");
  }
  return <Outlet />;
};

export default ProtectedRoute;
