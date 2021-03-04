import React, { useState } from "react";
import uuid from "uuid";

function TodoForm({ addTodo }){
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            // reset task input
            setTodo({ ...todo, task: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <div class="input-group mb-3">
                <input 
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTaskInputChange} 
                    class="form-control"/>
                <div class="input-group-append">
                    <button type="submit" class="btn btn-outline-light">Add</button>
                </div>
            </div>
        </form>
    );
}

export default TodoForm;