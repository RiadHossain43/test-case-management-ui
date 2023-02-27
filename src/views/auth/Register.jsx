import useForm from "hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import {
  Row, Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText
} from "reactstrap";
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
    <Row>
      <Col className="mx-auto px-lg-5 py-lg-5" lg="4" md="7">
        <div className="text-center text-muted mb-4">
          <small>Sign up as a user</small>
        </div>
        <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <InputGroupText>
                <i className="ni ni-user-run" />
              </InputGroupText>
              <Input
                placeholder="Name"
                type="text"
                autoComplete="off"
                id="name"
                onChange={(e) =>
                  handleChange({
                    key: "name",
                    value: e.currentTarget.value,
                  })
                }
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className="mb-3">
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
              onClick={(e) => handleSubmit(e, _register)}
            >
              Sign up
            </Button>
          </div>
          <Link className="btn-link" to={"/auth/login"}>
            <Button className="btn-link" size="sm">
              Sign in with credentials
            </Button>
          </Link>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
