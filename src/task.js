import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Task = ({ task, checkDone, removeTask }) => {
  return (
    <div className=" todoList w-50 ">
      <Alert className="d-flex justify-content-between">
        <p className={task.complete ? "line-through" : ""}>{task.text}</p>
        <div>
          <Button className="mx-2"
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => checkDone(task.id)}
          >
            {task.complete ? "uncheck" : "check"}
          </Button>
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => removeTask(task.id)}
          >
            remove
          </Button>
        </div>
      </Alert>

      {/* <button onClick={() => checkDone(task.id)}>
        {task.complete ? "uncheck" : "check"}
      </button>
      <button onClick={() => removeTask(task.id)}>remove</button> */}
    </div>
  );
};

export default Task;
