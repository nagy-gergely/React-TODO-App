import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import RemovedTodo from './RemovedTodo';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            removedTodo: null
        }
    }

    componentDidMount() {
        this.setState({ 
            todos: JSON.parse(localStorage.getItem('todos')) 
        });
    }

    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    addTodo = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo] 
        });
    }

    handleCompleteChange = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos 
        });
    }

    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id),
            removedTodo: this.state.todos.filter(todo => todo.id === id)
        });
    }

    handleUndo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo],
            removedTodo: null 
        });
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            removedTodo: null
        });
    }

    onDragEnd = (result) => {
        const { destination, source } = result;

        if(!destination) return;
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;

        const newTodos = [...this.state.todos];
        const todo = newTodos[source.index];
        newTodos.splice(source.index, 1);
        newTodos.splice(destination.index, 0, todo);

        this.setState({ todos: newTodos });
      };

    render() {
        return (
            <div>
            <div className='app'>
                <TodoHeader />
                <TodoForm addTodo={ this.addTodo }/>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <TodoList 
                        todos={ this.state.todos } 
                        handleCompleteChange={ this.handleCompleteChange }  
                        handleDelete={ this.handleDelete }
                    />
                </DragDropContext>
            </div>
            {this.state.removedTodo && 
                <RemovedTodo 
                    removedTodo={ this.state.removedTodo[0] } 
                    handleUndo={ this.handleUndo } 
                    handleClose={ this.handleClose }    
                />}
            </div>
        );
    }
}

export default App;
