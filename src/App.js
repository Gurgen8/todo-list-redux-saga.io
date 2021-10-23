import React, { Component } from 'react';
import CrateTask from "./componetns/CrateTask"
import ToDoList from "./componetns/ToDoList"


class App extends Component {
  render() {
    return (<>
       <CrateTask />
       <ToDoList />
    </>
    )
      
  }
}

export default App;
