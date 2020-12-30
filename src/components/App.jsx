import React from 'react';
import Task from './Task';


class App extends React.Component {

  // renders a div (for a certain timeperiod) that contains rows of tasks
  renderTimeBlock(timeBlock, i, time) {
    // timeBlock == { {0:{}, 1:{}, ... }

    // Render Rows
    let times = Object.values(timeBlock).map( (task, idx) => {

      // task == {id: 1, type: "Call", person: "Avni Submaranian", time: "9:00 - 10:00a", notes: "Inbound NY", …}
      let isLastTime = (Object.values(timeBlock).length - 1) === idx;

      return (
        <Task 
          task={task} 
          key={idx} 
          index={idx} 
          isLastTime={isLastTime}
          handleDeleteTask={(taskId, time) => this.props.deleteTask(taskId, time)}/>
      );
    });

    // if timeblock is empty, there are no times for that block, so exit
    if (Object.keys(timeBlock) === 0) return null;

    return (
      <div className="time-block-wrap" key={i}>
        <div className="time" key={i}>
          {time}
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

    let userTasksTimes = Object.keys(userTasks);
    // userTasksTimes == [ "9:00 - 10:00a", "11:15a - 12:00p" ]

    // will contain divs (that correspond to different time blocks)
    let timeBlocks = [];

    // loop over time blocks
    for (let i = 0; i < userTasksVals.length; i++) {
      let timeBlock = userTasksVals[i];
      let time = userTasksTimes[i];

      // render div time block that contains rows of tasks
      timeBlocks.push(this.renderTimeBlock(timeBlock, i, time));
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
