import TodoItem from "./TodoItem";
import TodoDone from "./TodoDone";
const TodoList = ({ todolist, onDone, onRemove, onEdit }) => {
  console.log(todolist);
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <div>
        {todolist.map((elem) =>
          elem.done === false ? (
            <TodoItem
              elem={elem}
              key={elem.id}
              onDone={onDone}
              onRemove={onRemove}
              onEdit={onEdit}
            ></TodoItem>
          ) : (
            <TodoDone elem={elem} key={elem.id} />
          )
        )}
      </div>
      <br></br>
    </div>
  );
};
export default TodoList;
