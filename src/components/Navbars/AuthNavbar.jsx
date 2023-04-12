import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/img/brand/logo.svg";
import { useNavigate } from "react-router-dom"
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
const AdminNavbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar fixedToTop>
        <NavbarGroup align={Alignment.LEFT} >
          <NavbarHeading className={Classes.ALIGN_LEFT}><img height="10" alt="automatise" src={logo} /></NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT} >
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="document" onClick={() => navigate("/console")}>
            Console
          </Button>
        </NavbarGroup>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
