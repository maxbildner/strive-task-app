import React from 'react';
import Task from './Task';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // props.userTasks == { 9:00-10:00a:{ {}, {} },  11-12p:{ {}, {} } } 
  //   // debugger
  //   // this.renderTimeBlock = this.renderTimeBlock.bind(this);
  // }

  // renders a div (for a certain timeperiod) that contains rows of tasks
  renderTimeBlock(timeBlock, i) {
    // timeBlock == { {0:{}, 1:{}, ... }

    // Render Rows
    let times = Object.values(timeBlock).map( (task, idx) => {

      // task == {id: 1, type: "Call", person: "Avni Submaranian", time: "9:00 - 10:00a", notes: "Inbound NY", …}
      // debugger

      return (
        <Task task={task} key={idx} index={idx} handleDeleteTask={(taskId, time) => this.props.deleteTask(taskId, time)}/>
      );
    });

    return (
      <div className="time-block-wrap" key={i}>
        <div className="time" key={i}>
          {(timeBlock[1] || timeBlock[4] || {}).time}
        </div>

        <div 
          className="time-block" 
          key={i + 1}
        >
          {times}
        </div>
      </div>
    );
  }


  render() {

    // destructure tasks from store
    const { userTasks } = this.props;

    // break tasks into different time blocks (ex. 9-10am, 11-12pm)
    let userTasksVals = Object.values(userTasks);
    // userTasksVals == [ {0:{}, 1:{},...}, {4:{}, 5:{}} ]

    // will contain divs (that correspond to different time blocks)
    let timeBlocks = [];

    // loop over time blocks
    for (let i = 0; i < userTasksVals.length; i++) {
      let timeBlock = userTasksVals[i];

      // render div time block that contains rows of tasks
      timeBlocks.push(this.renderTimeBlock(timeBlock, i));
    }

    return (
      <div className="App-wrap">
        <div className="App">
          {timeBlocks}
        </div>
      </div>
    );
  }
}


export default App;
