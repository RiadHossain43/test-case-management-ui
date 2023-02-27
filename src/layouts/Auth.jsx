import React from "react";
import { useLocation, Outlet } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";

// core components
import AuthHeader from "components/Headers/AuthHeader";
import AuthNavbar from "components/Navbars/AuthNavbar";
import AuthFooter from "components/Footers/AuthFooter";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        {/* <div className="header py-7 py-lg-8"></div> */}
        <AuthHeader />
        <Container className="mt-3 pb-3">
          <Outlet />
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
