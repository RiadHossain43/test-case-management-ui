import Avatar from "components/Avatar/Avatar";
import ReactMarkdown from "react-markdown";
import { Button, Card, CardBody, CardText } from "reactstrap";
import PropTypes from "prop-types";
import { deleteComment } from "services/commentServices";
import { getAccessTokenData } from "services/authServices";
import { useEffect, useState } from "react";
import { getUser } from "services/userServices";
const Comment = ({ data: comment, body, metaInfo }) => {
  let [author, setAuthor] = useState(null);
  useEffect(() => {
    async function _getAuthor() {
      let { data } = await getUser(comment?.createdBy);
      setAuthor(data);
    }
    _getAuthor();
  }, [comment?.createdBy]);
  async function _deleteComment() {
    await deleteComment(comment.id);
  }
  return (
    <Card className="bg-transparent shadow border-0">
      <CardBody>
        <Avatar
          imageSrc="..."
          avatarDisabled={true}
          userName={author?.name || "Riad Hossain"}
          actionAt={metaInfo?.actionAt || "27/10/2022"}
        />
        <small>
          <ReactMarkdown children={body} />
        </small>
        <CardText>
          <Button size="sm" className="btn-link">
            <i className="ni ni-bold-up" /> 12k
          </Button>
          <Button size="sm" className="btn-link">
            <i className="fas fa-flag" />
          </Button>
          {getAccessTokenData()?.nameid?.toString() ===
            comment.createdBy?.toString() && (
            <Button size="sm" className="btn-link" onClick={_deleteComment}>
              <i className="ni ni-fat-delete" />
            </Button>
          )}
        </CardText>
      </CardBody>
    </Card>
  );
};
Comment.propTypes = {
  body: PropTypes.string,
};

export default Comment;
