import { useState } from 'react';
import Voter from './voter';
import InputField from './inputField';
import PropTypes from 'prop-types';

const Comment = ({ name: n, comment: c, depth }) => {
  const [reply, setReply] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [commentKey, setCommentKey] = useState(0);

  const addComment = (e, name, comment, setName, setComment) => {
    e.preventDefault();
    if (name && comment) {
      setCommentList((ls) => [...ls, { name, comment, commentKey }]);
      setCommentKey((prevKey) => prevKey + 1);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-header">
        <div>
          <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>{n}</p>
          <p>{c}</p>
        </div>
        <Voter />
      </div>
      <div className="comment-body">
        {depth < 2 && (
          <button
            className="reply-button"
            type="button"
            onClick={() => setReply((prevReply) => !prevReply)}
          >
            Reply
          </button>
        )}
      </div>
      {reply && <InputField addComment={addComment} />}
      <ul>
        {commentList.map((el) => (
          <Comment
            name={el.name}
            comment={el.comment}
            depth={depth + 1}
            key={el.key}
          />
        ))}
      </ul>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
};

export default Comment;
