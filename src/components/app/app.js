import NewTaskForm from "../newTaskForm";
import TaskList from "../taskList";
import Footer from "../footer";
import React, { useState } from 'react';

import "./app.css"

const App = () => {
    const [tasks, setTasks] = useState([
        {label: "Первая задача", id: 0, completed: false},
        {label: "Вторая задача", id: 1, completed: false},
        {label: "Третья задача", id: 2, completed: false}
    ]);

    const deleteTask = (id) => {
        // Создаем новый массив задач, исключая задачу с заданным id
        const updatedTasks = tasks.filter(task => task.id !== id);
        // Обновляем состояние tasks новым массивом задач
        setTasks(updatedTasks);
    }

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }
            return task;
        }))
    }

    return (
        <section className="todoapp">
            <h1>todos</h1>
            <div>
                <NewTaskForm />
                <TaskList tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask}/>
                <Footer />
            </div>
        </section>
    );
};


export default App;