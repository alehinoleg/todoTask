import "./task.css";

const Task = ({task, toggleCompleted, deleteTask}) => {
  const {id, label, completed} = task;
    let styleLi = 'description pointer'
    if(completed) {
      styleLi += " done"
    }
    return (
        <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className={styleLi} onClick={() => toggleCompleted(id)}>{label}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
            </div>
        </li>
    );
};

export default Task;