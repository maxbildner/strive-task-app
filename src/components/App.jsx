import React from 'react';
import Task from './Task';


class App extends React.Component {
  constructor(props) {
    super(props);
    // props.userTasks == { 9:00-10:00a:{ {}, {} },  11-12p:{ {}, {} } } 
    // debugger

    this.renderTimeBlock = this.renderTimeBlock.bind(this);
  }


  // renders a div (for a certain timeperiod) that contains rows of tasks
  renderTimeBlock(timeBlock, i) {
    // timeBlock == { {0:{}, 1:{}, ... }

    // Render Rows
    let times = Object.values(timeBlock).map( (task, idx) => {

      // task == {id: 1, type: "Call", person: "Avni Submaranian", time: "9:00 - 10:00a", notes: "Inbound NY", …}
      // debugger

      return (
        // <div className="row" key={idx}>
        //   <div className="row-left">
        //     <span className="logo">{logo}</span>
        //     <div className="notes-person">
        //       <div className="notes">
        //         {task.notes}
        //       </div>
        //       <div className="type-person">
        //         <span className="type">{task.type}</span> {(task.type === "LinkedIn message") ? "" : "with"} <span className="person">{task.person}</span>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="row-right">
        //     <span className="delete">
        //       <svg height="15pt" viewBox="0 0 329.26933 329" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
        //     </span>
        //     <span className="complete">
        //       <svg height="15pt" viewBox="0 -46 417.81333 417" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" /></svg>
        //     </span>
        //     <span className="details">
        //       <svg height="15pt" widht="15pt" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M174.54,508.94,420.1,263.39a10.74,10.74,0,0,0,0-14.75L174.53,3.06a10.43,10.43,0,0,0-14.75,0L92,70.8a10.43,10.43,0,0,0,0,14.75L262.47,256,92,426.46a10.73,10.73,0,0,0,0,14.75l67.75,67.73A10.43,10.43,0,0,0,174.54,508.94Z"/></svg>
        //     </span>
        //   </div>
        // </div>
        <Task task={task} key={idx} index={idx}/>
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
