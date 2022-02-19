import TodoItem from "./TodoItem";
import TodoDone from "./TodoDone";
const TodoList = ({ list, onDone, doneList, onRemove, onEdit }) => {
  console.log(list);
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <div>
        {list.map((elem) => (
          <TodoItem
            elem={elem}
            key={elem[1]}
            onDone={onDone}
            doneList={doneList}
            onRemove={onRemove}
            onEdit={onEdit}
          ></TodoItem>
        ))}
      </div>
      <br></br>
      <h4 className="doneText">Done</h4>
      <div className="Done">
        <div className="doneListText">
          {doneList.map((doneListItem) => (
            <TodoDone doneListItem={doneListItem} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TodoList;
