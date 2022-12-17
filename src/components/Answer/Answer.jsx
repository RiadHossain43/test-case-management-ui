import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import MetaInfo from "components/MetaInfo/MetaInfo";
import Vote from "components/Vote/Vote";
import { getUser } from "services/userServices";

const Answer = ({ data: answer, votes }) => {
  let [author, setAuthor] = useState(null);
  useEffect(() => {
    async function _getAuthor() {
      let { data } = await getUser(answer?.createdBy);
      setAuthor(data);
    }
    _getAuthor();
  }, [answer?.createdBy]);
  return (
    <>
      <Row>
        <Col md="1">
          <Vote votes={votes} />
          <p className="m-2 text-success">
            <i className="ni ni-check-bold"></i>
          </p>
        </Col>
        <Col md="11">
          <ReactMarkdown children={answer?.body} />
        </Col>
      </Row>
      <hr />
      <MetaInfo userName={author?.name} />
    </>
  );
};
Answer.defaultProps = {
  votes: {
    count: 0,
    upButton: {
      disabled: false,
      onUpVote: () => {},
    },
    downButton: {
      disabled: false,
      onDownVote: () => {},
    },
  },
};

Answer.propTypes = {
  votes: PropTypes.shape({
    count: PropTypes.number.isRequired,
    upButton: PropTypes.shape({
      disabled: PropTypes.bool,
      onUpVote: PropTypes.func,
    }),
    downButton: PropTypes.shape({
      disabled: PropTypes.bool,
      onDownVote: PropTypes.func,
    }),
  }),
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }),
  isAccepted: PropTypes.bool,
};

export default Answer;
