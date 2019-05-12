import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    render() {
        const todoList = this.props.todos.map((todo, index) => {
            return <Todo 
                key={ todo.id }
                index={ index}
                id={ todo.id }
                task={ todo.task } 
                date={ todo.date } 
                completed={ todo.completed } 
                handleCompleteChange={ this.props.handleCompleteChange }
                handleDelete={ this.props.handleDelete } 
            />;
        });

        return (
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                    <ul className="todo-list" ref={provided.innerRef} {...provided.droppableProps}>
                        { todoList }
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        );
    }
}

export default TodoList;