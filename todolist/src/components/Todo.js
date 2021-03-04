import React from "react";

function Todo({ todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (

        <div class="d-flex align-items-center">
            <div class="pretty p-curve p-default mr-2">
                <input type="checkbox" onClick={handleCheckboxClick}/>
                <div class="state p-light">
                    <label>
                        <span class="text text-white mx-2" style={{
                        textDecoration: todo.completed ? "line-through" : null
                            }}>
                            {todo.task}
                        </span>
                    </label>
                </div>
            </div>
        
            <button class="btn btn-outline-light" 
                type="button" 
                onClick={handleRemoveClick}>
                X
            </button>
        </div>


        // <div style={{ display: "flex" }}>
        //     <input type="checkbox" onClick={handleCheckboxClick} />
        //     <li
        //         style={{
        //             color: "white",
        //             textDecoration: todo.completed ? "line-through" : null
        //         }}>
        //         {todo.task}</li>
        //     <button onClick={handleRemoveClick}>x</button>
        // </div>
    )
}

export default Todo;