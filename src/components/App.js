import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: 'Take out the trash',
        date: '2024-03-27',
        important: true,
        active: true,
        finishDate: null
      },
      { id: 1, text: "Review and respond to emails in my inbox", date: '2024-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "Call the IT department to troubleshoot computer issues", date: '2024-09-05', important: false, active: true, finishDate: null },
      { id: 3, text: "Update calendar with upcoming deadlines and meetings", date: '2024-04-14', important: true, active: true, finishDate: null },
      { id: 4, text: "Complete research for upcoming presentation", date: '2024-12-12', important: false, active: true, finishDate: null },
      { id: 5, text: "Review and update project budgets", date: '2024-03-28', important: false, active: true, finishDate: null },
    ]
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo list</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
