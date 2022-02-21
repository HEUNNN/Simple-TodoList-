import "./App.css";
import TodoEditor from "./TodoEditor";
import { useRef, useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todolist, setList] = useState([]);
  const listId = useRef(0);
  const onCreate = (content) => {
    const newItem = {
      content,
      id: listId.current,
      done: false,
    }; //list.length: index처럼 사용
    listId.current += 1;
    setList([newItem, ...todolist]);
  };

  const onDone = (targetId) => {
    setList(
      todolist.map((elem) =>
        elem.id === targetId ? { ...elem, done: true } : elem
      )
    );
  };

  const onRemove = (targetId) => {
    const removeList = todolist.filter((elem) => elem.id !== targetId);
    setList(removeList);
  };
  const onEdit = (targetId, editContent) => {
    setList(
      todolist.map((elem) =>
        elem.id === targetId ? { ...elem, content: editContent } : elem
      )
    );
  };
  return (
    <div className="App">
      <TodoEditor onCreate={onCreate} />
      <TodoList
        todolist={todolist}
        onDone={onDone}
        onRemove={onRemove}
        onEdit={onEdit}
      ></TodoList>
    </div>
  );
}

export default App;
