import React from "react";
import { Link, useNavigate } from "react-router-dom";
// reactstrap components

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import { Container } from "react-grid-system";

import { logout } from "services/authServices";
import { getAccessTokenData } from "services/authServices";
import FcmNotification from "./FcmNotification";

const AdminNavbar = (props) => {
  const navigate = useNavigate();
  return (
    <Navbar fixedToTop>
      <Container>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading className={Classes.ALIGN_LEFT}>
            {props.brandText}
          </NavbarHeading>
        </NavbarGroup>
        {!getAccessTokenData() ? (
          <React.Fragment>
            <FcmNotification />
            <NavbarGroup align={Alignment.RIGHT}>
              <Button
                className={Classes.MINIMAL}
                icon="key"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </Button>
            </NavbarGroup>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
