import { useRoutes, Navigate } from "react-router-dom";
import Auth from "layouts/Auth";
import Main from "layouts/Main";
import routes from "routes";
export default function App() {
  let element = useRoutes([
    {
      element: <Auth />,
      children: [...routes.authLayout.auth, ...routes.authLayout.fallback],
    },
    {
      element: (
        <Main
          navigation={[
            ...routes.mainLayout.workspace,
            ...routes.mainLayout.console,
          ]}
        />
      ),
      children: [...routes.mainLayout.workspace, ...routes.mainLayout.console],
    },
    {
      path: "*",
      element: <Navigate to="/not-found" />,
    },
  ]);
  return element;
}
