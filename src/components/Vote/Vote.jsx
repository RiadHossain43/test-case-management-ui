import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
const Vote = ({ votes }) => {
  return (
    <>
      <Button
        disabled={votes.upButton.disabled}
        onClick={votes.upButton.onUpVote}
        size="sm"
        className="btn-link"
      >
        <i className="ni ni-bold-up" />
      </Button>
      <p className="mx-1 m-0">
        <small className="text-center">{votes?.count}</small>
      </p>
      <Button
        disabled={votes.upButton.disabled}
        onClick={votes.upButton.onDownVote}
        size="sm"
        className="btn-link"
      >
        <i className="ni ni-bold-down" />
      </Button>
    </>
  );
};
Vote.defaultProps = {
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

Vote.propTypes = {
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
};

export default Vote;
