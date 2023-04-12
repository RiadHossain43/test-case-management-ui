import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import logo from "assets/img/brand/logo.svg";
import { Container } from "react-grid-system";
import { useNavigate } from "react-router-dom";
const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar fixedToTop>
      <Container>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading className={Classes.ALIGN_LEFT}>
            <img height="10" alt="automatise" src={logo} />
          </NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button
            className={Classes.MINIMAL}
            icon="console"
            onClick={() => navigate("/console")}
          >
            Console
          </Button>
        </NavbarGroup>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
