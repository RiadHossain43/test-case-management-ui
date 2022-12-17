import Login from "views/auth/Login";
import Register from "views/auth/Register";
var routes = [
  {
    path: "/auth/login",
    element: <Login />,
    name: "Login",
    icon: "ni ni-key-25",
  },
  {
    path: "/auth/register",
    element: <Register />,
    name: "Register",
    icon: "ni ni-key-25",
  },
];
export default routes;
