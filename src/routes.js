import auth from "views/auth/routes";
import fallback from "views/fallback/routes";
import workspace from "views/workspace/routes";
import console from "views/console/routes";

var routes = {
  authLayout: {
    auth,
    fallback,
  },
  mainLayout: {
    workspace,
    console,
  },
};
export default routes;
