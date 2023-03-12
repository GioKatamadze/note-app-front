import { Outlet } from "react-router-dom";
import SignIn from "../Pages/sign-in/signin.jsx";

const ProtectedRoute = () => {
  if (!localStorage.newData) {
    return <SignIn />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
