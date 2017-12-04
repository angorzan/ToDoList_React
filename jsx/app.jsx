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
            this.props.addTask(this.state.newtask);

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
        render() {
            console.log('Tasks to do: ' + this.props.tasksTodo);

            const listOfToDo = this.props.tasksTodo.map((item, i) => {
                return (
                    <ToDoItem item={item} key={i} index={i} removeTask={this.props.removeTask}/>
                )
            });
            return (
                <div>

                    <div className="container tasks_to_do">
                        <h1>To Do Tasks</h1>
                        <div className="form-group">
                            <ul>
                                {listOfToDo}
                            </ul>
                        </div>
                    </div>

                </div>
            )
        }
    }

    class TasksDone extends React.Component {

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


    class ToDoItem extends React.Component {

        handleClickToRemove = () => {
            console.log('Task removed');
            this.props.removeTask(this.props.index);

        };
        handleClickToComplete = () => {
            console.log('Task done');
            this.props.completeTask(this.props.index);
        };
        render() {
            return <li>
                {this.props.item}
                <button className="removeTaskButton btn btn-danger" onClick={this.handleClickToRemove}>Remove</button>
                <button className="addTaskButton btn btn-warning" onClick={this.handleClickToComplete}>Done</button>
            </li>
        }
    }


    class ToDoList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

                tasksTodo: []
            };
            this.addTask = (task) => {
                console.log('ToDoList received task: ' + task);
                this.state.tasksTodo.push(task);
                this.setState({

                    tasksTodo: this.state.tasksTodo,
                })
            };
            this.removeTask = (key) => {
                console.log('ToDoList received task to remove: ' + this.state.tasksTodo.splice(key, 1));
                this.setState({
                    tasksTodo: this.state.tasksTodo,
                });
            };
            this.completeTask = (key) => {
                const task = this.state.tasksTodo.splice(key, 1);
                console.log('ToDoList received task to complete: ' + task);
                this.setState({
                    tasksTodo: this.state.tasksTodo,
                });
            }
        }

        render() {

            return (
                <div className="form-group">

                    <TaksToAdd addTask={this.addTask}/>
                    <TasksToDo tasksTodo={this.state.tasksTodo} removeTask={this.removeTask} completeTask={this.completeTask}/>
                    <TasksDone removeTask={this.removeTask}/>
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