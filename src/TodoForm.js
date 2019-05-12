import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({ task: '', date: '' });
    }

    render() {
        return (
            <form className="todo-form">
                <label className="todo-label">New Todo</label>
                <input className="task-input" type="text" name="task" onChange={ this.handleChange } value={ this.state.task } placeholder="New Todo" />
                <input className="date-input" type="date" name="date" onChange={ this.handleChange } value={ this.state.date } />
                <button className="submit-button" type="submit" onClick={ this.handleSubmit }>+</button>
            </form>
        );
    }
}

export default TodoForm;