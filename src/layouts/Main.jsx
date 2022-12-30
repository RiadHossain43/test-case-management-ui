import React from "react";
import { useLocation, Outlet } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar";
import AdminFooter from "components/Footers/AdminFooter";
import Sidebar from "components/Sidebar/Sidebar";
import AdminHeader from "components/Headers/AdminHeader";
const Main = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getBrandText = () => {
    for (let i = 0; i < props.navigation.length; i++) {
      if (location.pathname === props.navigation[i].path)
        return props.navigation[i].name;
    }
    return "Brand";
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={props.navigation}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo.svg").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar {...props} brandText={getBrandText()} />
        <AdminHeader />
        <Outlet />
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Main;
