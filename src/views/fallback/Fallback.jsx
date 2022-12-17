import React from "react";
import {
  Row,
  Card,
  CardBody,
  Col,
} from "reactstrap";
const Fallback = () => {
  return (
    <Row>
      <Col md="12">
        <Card className="shadow border-0">
          <CardBody>
            <div className="text-center text-muted">
              <small>
                Opps | Something went wrong we are working to fix it.
              </small>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Fallback;
