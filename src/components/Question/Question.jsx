import React from "react";
import { Col, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import MetaInfo from "components/MetaInfo/MetaInfo";
import Vote from "components/Vote/Vote";
import AboutQuestion from "components/Aanalytics/AboutQuestion";
const Question = ({ data, votes, metaInfo }) => {
  return (
    <>
      <h1 className="text-bold">{data?.title}</h1>
      <AboutQuestion />
      <hr />
      <Row>
        <Col md="1">
          <Vote votes={votes} />
        </Col>
        <Col md="11">
          <ReactMarkdown children={data?.body} />
        </Col>
      </Row>
      <hr />
      <MetaInfo askedAt={metaInfo?.askedAt} userName={metaInfo?.userName} />
    </>
  );
};
Question.defaultProps = {
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

Question.propTypes = {
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
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Question;
