import { Outlet } from "react-router-dom";
import SignIn from "../Pages/sign-in/signin.jsx";

const ProtectedRoute = () => {
  // const { userInfo } = useSelector((state) => state.auth);

  // if (!userInfo) {
  //   return <SignIn />;
  // }
  return <Outlet />;
};

export default ProtectedRoute;
