import React from 'react';
import './RemovedTodo.css';

function RemovedTodo(props) {
    const handleUndoClick = (event) => {
        console.log(props.removedTodo)
        props.handleUndo(props.removedTodo);
    }

    const handleCloseClick = (event) => {
        props.handleClose();
    }

    return (
        <div className="removed-todo">
            <p>Todo removed.</p>
            <button onClick={ handleUndoClick }><i className="fas fa-undo"></i></button>
            <button className="removed-todo-close" onClick={ handleCloseClick }><i className="fas fa-times"></i></button>
        </div>
    );
}

export default RemovedTodo;