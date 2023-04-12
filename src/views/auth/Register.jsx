import useForm from "hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { Row, Col, Container } from "react-grid-system";
import { createUser } from "services/userServices";
const Register = () => {
  let { dataModel, handleChange, handleSubmit } = useForm({
    data: {
      name: "",
      email: "",
      password: "",
    },
  });
  let navigate = useNavigate();
  async function _register() {
    try {
      await createUser(dataModel.data);
      alert("User created");
      navigate("/admin/questions");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Container>
      <Row>
        <Col md={4}>
          <p className={"bp4-running-text bp4-text-muted"}>Sign up as a user</p>
          <FormGroup>
            <InputGroup
              leftIcon="new-person"
              placeholder="i.e. Jhon Doe"
              type="text"
              autoComplete="off"
              onChange={(e) =>
                handleChange({
                  key: "name",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <InputGroup
              leftIcon="envelope"
              placeholder="i.e. your.name@domain.com"
              type="email"
              autoComplete="off"
              onChange={(e) =>
                handleChange({
                  key: "email",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <InputGroup
              leftIcon="lock"
              placeholder="i.e. KH%43S(AUS@#)JASB"
              type="password"
              autoComplete="off"
              onChange={(e) =>
                handleChange({
                  key: "password",
                  value: e.currentTarget.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Button
              fill
              intent="Primary"
              type="button"
              onClick={(e) => handleSubmit(e, _register)}
            >
              Sign up
            </Button>
          </FormGroup>
          <Link className="btn-link" to={"/auth/login"}>
            <small>Sign in with credentials</small>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
