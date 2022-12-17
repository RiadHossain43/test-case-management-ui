import React from "react";
// reactstrap components
import { Container, FormGroup, Input, InputGroup } from "reactstrap";

const AdminHeader = () => {
  return (
    <>
      <div className="header pb-4 pt-4 pt-md-6">
        <Container fluid>
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <Input placeholder="Search questions" type="text" />
            </InputGroup>
          </FormGroup>
        </Container>
      </div>
    </>
  );
};

export default AdminHeader;
