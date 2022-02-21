import { useRef, useState } from "react";
const TodoEditor = ({ onCreate }) => {
  const [todo, setTodo] = useState({
    content: "",
  });
  const handleInput = (e) => {
    setTodo({
      [e.target.name]: e.target.value,
    });
  };
  const inputRef = useRef();
  const handleAdd = () => {
    if (todo.content.length < 1) {
      inputRef.current.focus();
      return;
    }
    onCreate(todo.content);
    setTodo({
      content: "",
    });
  };
  return (
    <div className="TodoEditor">
      <div>
        <h2>Simple Todo App</h2>
      </div>
      <div className="todoInput">
        <input
          value={todo.content}
          onChange={handleInput}
          ref={inputRef}
          name="content"
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default TodoEditor;
