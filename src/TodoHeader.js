import React from 'react';
import './TodoHeader.css';

function TodoHeader(props) {
    return(
        <h1 className="todo-header"><i className="fas fa-tasks"></i> Todo list</h1>
    );
}

export default TodoHeader;