import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    console.log("Domek załadowany!");

    class ToDoListHeader extends React.Component {
        render() {
            return <h1>My To Do List</h1>
        }
    }

    class TaksToAdd extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                newtask: '',
                tasks_todo: [],

            }
        }

        handleChange = (e) => {
            this.setState({
                newtask: e.target.value,
            });

        };
        handleClickAdd = () => {
            console.log('Task added');
            console.log('New task: ' + this.state.newtask);
            this.state.push(this.state.newtask);
        };

        render() {
            console.log('Render input');
            return (
                <div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name:</label>
                        <input className="form-control" type="text" placeholder="Place your task here"
                               onChange={this.handleChange} value={this.state.newtask}/>
                    </div>
                    <button className="addTaskButton btn btn-primary" onClick={this.handleClickAdd}>Add task</button>
                </div>
            )
        }
    }


    class TasksToDo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

                tasks_todo: [],
            }
        }

        handleClick2 = () => {
            console.log('Task removed');
        };
        handleClick3 = () => {
            console.log('Task done');
        };

        render() {
            console.log('Tasks to do: ' + this.state.tasks_todo);
            const list_tasks_todo = this.state.tasks_todo.map(item => {
                return (<div>
                    <li onClick={e => this.moveItem(e)}>
                        {item}
                    </li>
                    <button className="removeTaskButton btn btn-danger" onClick={this.handleClick2}>Remove
                    </button>
                    <button className="addTaskButton btn btn-warning" onClick={this.handleClick3}>Done</button>
                </div>)
            });
            return (
                <div>

                    <div className="container tasks_to_do">
                        <h1>To Do Tasks</h1>
                        <div className="form-group">
                            <ul>
                                {list_tasks_todo}
                            </ul>
                        </div>
                    </div>

                </div>
            )
        }
    }

    class TasksDone extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

                tasks_done: []
            }
        }

        handleClick2 = () => {
            console.log('Task removed');
        };

        render() {

            return (
                <div>

                    <div className="container tasks_done">
                        <h1>Done Tasks</h1>
                        <div className="form-group">
                            <ul>
                                <button className="removeTaskButton btn btn-success" onClick={this.handleClick2}>
                                    Remove
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }


    class ToDoList extends React.Component {
        render() {

            return (
                <div className="form-group">

                    <TaksToAdd />
                    <TasksToDo/>
                    <TasksDone/>
                </div>
            )
        }
    }

    class ToDoAll extends React.Component {
        render() {
            return (

                    <div className="container">
                        <ToDoListHeader/>
                        <ToDoList/>
                    </div>

            )
        }
    }

    class App extends React.Component {
        render() {
            return <ToDoAll/>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );


});
