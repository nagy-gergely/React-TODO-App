import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Todo.css';

function Todo(props) {
    const handleChange = (event) => {
        props.handleCompleteChange(props.id);
    }

    const handleClick = (event) => {
        props.handleDelete(props.id);
    }

    return (
        <Draggable draggableId={ props.id } index={ props.index }>
            {(provided, snapshot) => (
                <div className="todo" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <input className="todo-checkbox" type="checkbox" name="completed" onChange={ handleChange } checked={ props.completed } />
                    <div className={props.completed ? "todo-text completed" : "todo-text"}>
                        <span className="todo-task">{ props.task }</span>
                        <span className="todo-date">{ props.date }</span>
                    </div>
                    <button onClick={ handleClick }><i className="fas fa-trash"></i></button>
                </div>
            )}
        </Draggable>
    );
}

export default Todo;