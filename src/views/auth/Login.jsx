import useForm from "hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { login } from "services/authServices";
import { defaultAuthDataSet } from "./utils/data";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { Row, Col, Container } from "react-grid-system";
const Login = () => {
  let { dataModel, handleChange, handleSubmit } = useForm(defaultAuthDataSet);
  let navigate = useNavigate();
  async function _login() {
    try {
      await login(dataModel.data);
      navigate("/admin/questions");
    } catch (e) {
      alert("Login faile");
    }
  }
  return (
    <Container>
      <Row>
        <Col md={4}>
          <p className={"bp4-running-text bp4-text-muted"}>
            Sign in with credentials
          </p>
          <FormGroup>
            <InputGroup
              leftIcon="envelope"
              placeholder="i.e. your.email@domain.com"
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
              placeholder="i.e. KH%43S(AUS@#)JASB"
              type="password"
              autoComplete="off"
              leftIcon="lock"
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
              intent="Primary"
              type="button"
              fill
              onClick={(e) => handleSubmit(e, _login)}
            >
              Sign in
            </Button>
          </FormGroup>
          <Link className="btn-link" to={"/auth/register"}>
            <small>Create an account</small>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
