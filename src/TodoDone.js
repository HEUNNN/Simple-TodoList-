import { FaCheck } from "react-icons/fa";
const TodoDone = ({ elem }) => {
  return (
    <div className="todoDone">
      <FaCheck color="red" />
      <div>{elem.content}</div>
    </div>
  );
};

export default TodoDone;
