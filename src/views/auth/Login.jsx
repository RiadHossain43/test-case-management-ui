import useForm from "hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import { login } from "services/authServices";
import { defaultAuthDataSet } from "./utils/data";
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
    <Row>
      <Col className="mx-auto px-lg-5 px-md-lg-3" lg="4" md="7">
        <div className="text-center text-muted mb-4">
          <small>Sign in with credentials</small>
        </div>
        <Form role="form">
          <FormGroup className="mb-3 bg-transparent">
            <InputGroup className="input-group-alternative">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
              <Input
                placeholder="Email"
                type="email"
                autoComplete="off"
                id="email"
                onChange={(e) =>
                  handleChange({
                    key: "email",
                    value: e.currentTarget.value,
                  })
                }
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
              <Input
                placeholder="Password"
                type="password"
                autoComplete="off"
                id="password"
                onChange={(e) =>
                  handleChange({
                    key: "password",
                    value: e.currentTarget.value,
                  })
                }
              />
            </InputGroup>
          </FormGroup>
          <div className="text-center">
            <Button
              className="btn-block my-5"
              color="primary"
              type="button"
              onClick={(e) => handleSubmit(e, _login)}
            >
              Sign in
            </Button>
          </div>
          <Link className="btn-link" to={"/auth/register"}>
            <Button className="btn-link" size="sm">
              Create an account
            </Button>
          </Link>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
