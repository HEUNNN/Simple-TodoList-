import TodoDone from "./TodoDone";
import { useState, useRef } from "react";
const TodoItem = ({ elem, onDone, onRemove, onEdit }) => {
  const onHandleDone = () => {
    onDone(elem[0]);
    onRemove(elem[1]);
  };
  const onHandleRemove = () => {
    onRemove(elem[1]);
  };
  const [isEdit, setIsEdit] = useState(false);
  const toggle = () => {
    setIsEdit(!isEdit);
  };
  const [editTextArea, setEditTextArea] = useState(elem[0]); //수정하기 버튼 눌렀을때 수정 전의 content를 띄워둬야 함
  const onHandleTextarea = (e) => {
    setEditTextArea(e.target.value);
  };
  const onQuitEdit = () => {
    toggle();
    setEditTextArea(elem[0]);
  };
  const textareaRef = useRef();
  const onEditComfirm = () => {
    if (editTextArea.length < 2) {
      textareaRef.current.focus();
      return;
    }
    if (window.confirm(`${elem[1]}번째 내용을 수정하시겠습니까?}`)) {
      onEdit(elem[1], [editTextArea, elem[1]]);
      toggle();
    }
  };
  /*
  수정하기
  수정하기 버튼을 누르면 textArea가 뜨고, 수정확인/수정취소 버튼이 새로 나타나야 함
  textArea에는 수정 전 content가 그대로 떠야하고, 수정취소 버튼 누르면 다시 수정 전의 content로 되돌려 놔야 한다.
  수정 확인을 누르면 todoList를 update하기 위해서 App.js로부터 props 받은 함수에 수정 content를 담은 list 데이터를 다시 보냄
  */
  return (
    <div className="TodoItem">
      <div className="content">
        {isEdit === false ? (
          <>
            {" "}
            <input type="checkbox" onClick={onHandleDone}></input>
            {elem[0]}
          </>
        ) : (
          <>
            <textarea
              value={editTextArea}
              onChange={onHandleTextarea}
              ref={textareaRef}
            ></textarea>
          </>
        )}
      </div>
      <div className="itemBtn">
        {isEdit ? (
          <>
            <button onClick={onEditComfirm}>수정 확인</button>
            <button onClick={onQuitEdit}>수정 취소</button>
          </>
        ) : (
          <>
            <button onClick={toggle}>수정</button>
            <button onClick={onHandleRemove}>삭제</button>
          </>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
