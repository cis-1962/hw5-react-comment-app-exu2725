import { useState } from 'react';
import InputField from './components/inputField';
import Comment from './components/comment';
import './app.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const addComment = (e, name, comment, setName, setComment) => {
    e.preventDefault();
    if (name && comment) {
      setList((ls) => [...ls, { name, comment, id: count }]);
      setCount((prevCount) => prevCount + 1);
      setName('');
      setComment('');
    }
  };

  return (
    <div>
      <h1>CIS 1962 HW5: Commenting Platform</h1>
      <InputField addComment={addComment} />
      {list.map((el) => (
        <Comment name={el.name} comment={el.comment} depth={0} key={el.id} />
      ))}
    </div>
  );
};

export default App;
