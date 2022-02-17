import TodoDone from "./TodoDone";
const TodoItem = ({ elem, onDone, onRemove }) => {
  const onHandleDone = () => {
    onDone(elem[0]);
    onRemove(elem[1]);
  };
  const onHandleRemove = () => {
    onRemove(elem[1]);
  };
  return (
    <div className="TodoItem">
      <div className="flexItem">
        <div className="item">
          <input type="checkbox" onClick={onHandleDone}></input>
          <span>{elem[0]}</span>
        </div>
        <div className="itemBtn">
          <button onClick={onHandleRemove}>삭제</button>
          <button>수정</button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
