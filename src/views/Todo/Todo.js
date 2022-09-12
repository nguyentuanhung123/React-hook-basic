import { FaTrash } from "react-icons/fa";
import "./Todo.css";

const Todo = (props) => {
  console.log(">>> check props : ", props);
  // const todos = props.todos;
  const { todos, address, deleteDataTodo } = props;

  const handleDelete = (id) => {
    // alert(id);
    deleteDataTodo(id);
  };

  return (
    <ul className="todos-container">
      <div className="title">{address}</div>
      {todos.map((todo) => {
        console.log(">>> Check todo list : ", todo);
        return (
          <div className="parent" key={todo.id}>
            <li className="todo-child">
              {todo.title}
              {/* &nbsp; &nbsp; */}
            </li>
            <span onClick={() => handleDelete(todo.id)}>
              {" "}
              <FaTrash />{" "}
            </span>
          </div>
        );
      })}
      <hr />
    </ul>
  );
};
export default Todo;
