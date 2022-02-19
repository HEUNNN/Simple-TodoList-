import "./App.css";
import TodoEditor from "./TodoEditor";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [list, setList] = useState([]);
  const onCreate = (todo) => {
    const newItem = [todo, list.length]; //list.length: index처럼 사용
    setList([newItem, ...list]);
  };

  const [doneList, setDone] = useState([]);
  const onDone = (doneItem) => {
    const NewDoneList = doneItem;
    setDone([NewDoneList, ...doneList]);
  };

  const onRemove = (targetIdx) => {
    const removeList = list.filter((it) => it[1] !== targetIdx);
    setList(removeList);
  };
  const onEdit = (targetId, editContent) => {
    setList(list.map((elem) => (elem[1] === targetId ? editContent : elem)));
  };
  return (
    <div className="App">
      <TodoEditor onCreate={onCreate} />
      <TodoList
        list={list}
        onDone={onDone}
        doneList={doneList}
        onRemove={onRemove}
        onEdit={onEdit}
      ></TodoList>
    </div>
  );
}

export default App;
