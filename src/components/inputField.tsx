import { useState } from 'react';
import PropTypes from 'prop-types';

function InputField({ addComment }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="input-field-container" style={{ padding: '0 15px' }}>
      <form>
        <div>
          <input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '15px 0' }}
          />
        </div>
        <div>
          <textarea
            value={comment}
            placeholder="Comment"
            onChange={(e) => setComment(e.target.value)}
            style={{ width: '100%', height: '100px' }}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={(e) => addComment(e, name, comment, setName, setComment)}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

InputField.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default InputField;
