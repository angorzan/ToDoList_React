import React from 'react';
import ReactDOM from 'react-dom';

    document.addEventListener('DOMContentLoaded', function(){
        console.log("Domek załadowany!");
        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {

                };

            }

            handleClick1 = (e) => {
               console.log('Task added');
                };

            handleClick2 = (e) => {
                console.log('Task removed');
            };

            handleClick3 = (e) => {
                console.log('Task done');
            };

            render() {

                return (
                    <div>
                        <div className="container task_to_add">
                                <h1>My To Do List</h1>
                                <div className="form-group">
                                        <label className="col-sm-2 control-label">Name:</label>
                                        <input className="form-control" type="text" placeholder="Place your task here" />
                                </div>
                                <button className="addTaskButton btn btn-primary" onClick={this.handleClick1}>Add task</button>
                        </div>

                         <div className="container tasks_to_do">
                                <h1>To Do Tasks</h1>
                                <div className="form-group">

                                    <button className="removeTaskButton btn btn-danger" onClick={this.handleClick2}>Remove</button>
                                    <button className="addTaskButton btn btn-warning" onClick={this.handleClick3}>Done</button>
                                </div>
                        </div>

                        <div className="container tasks_done">
                                <h1>Done Tasks</h1>
                                <div className="form-group">

                                    <button className="removeTaskButton btn btn-success" onClick={this.handleClick2}>Remove</button>

                                </div>
                        </div>



                     </div>

            )
            }
        }

        ReactDOM.render(
            <App />,
            document.getElementById('app')
        );

    });
