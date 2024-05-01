import Task from "../task/task";

import "./taskList.css"

const TaskList = ({tasks, toggleCompleted, deleteTask}) => {
    return (
        <ul className="todo-list">
            {tasks.map(task => {
                return <Task task={task} key={task.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask}/>
            })}
        </ul>
    );
};

export default TaskList;