import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    // props.userTasks == { 9:00-10:00a:{ {}, {} },  11-12p:{ {}, {} } } 
    // debugger

    this.renderTimeBlock = this.renderTimeBlock.bind(this);
  }


  renderTimeBlock(timeBlock, i) {
    // timeBlock == { {0:{}, 1:{}, ... }

    let times = Object.values(timeBlock).map( (task, idx) => {

      // task == {id: 1, type: "CALL", person: "Avni Submaranian", time: "9:00 - 10:00a", notes: "Inbound NY", …}
      // debugger

      return (
        <div className="row" key={idx}>
          <div className="row-left">
            <span className="logo">LOGO</span>
            <div className="notes-person">
              <div className="notes">
                {task.notes}
              </div>
              <div className="person">
                {task.person}
              </div>
            </div>
          </div>
          <div className="row-right">
            <span>X</span>
            <span>C</span>
            <span>{">"}</span>
          </div>
        </div>

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
    // debugger

    // will contain divs (that correspond to different time blocks)
    let timeBlocks = [];

    // loop over time blocks
    for (let i = 0; i < userTasksVals.length; i++) {
      let timeBlock = userTasksVals[i];

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
