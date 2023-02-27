import React from "react";
import Table from "components/Table/Table";
import { Container, Row, Col, Button } from "reactstrap";
import TextEditor from "components/Editors/TextEditor/Index";
const Workspaces = () => {
  return (
    <Container fluid className="py-2">
      <Row>
        <Col md="12">
          <Table
            title="Work spaces"
            columns={[
              {
                header: "Name",
                accessor: "name",
              },
              {
                header: "Type",
                accessor: "type",
              },
              {
                header: "Actions",
                accessor: "actions",
              },
            ]}
            data={[
              {
                name: "iMS Systems Test cases",
                type: "Private",
                actions: [
                  <Button size="sm" className="btn btn-icon text-danger">
                    Delete
                  </Button>
                ],
              },
            ]}
          />
        </Col>
        <Col md="12">
          <TextEditor />
        </Col>
      </Row>
    </Container>
  );
};
export default Workspaces;
