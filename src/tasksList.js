import Task from "./task";

const TasksList = ({ displayTasks, removeTask, checkDone }) => {
  return (
    <div className=""> 
      {displayTasks().map((task) => (
        <Task
          key={task.id}
          task={task}
          checkDone={checkDone}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
