import React from 'react';
import Icon from './Icon';


class Task extends React.Component {
  constructor(props) {
    super(props);

    // local state to track whether row has been clicked, and whether mouse is over row
    this.state = {
      isClicked: false,
      isMouseOver: false,
      isMouseOverIcon: false,
    };
  }


  render() {

    const { task, index, handleDeleteTask, isLastTime } = this.props;
    // task == {id: 1, type: "Call", person: "Avni Submaranian", time: "9:00 - 10:00a", notes: "Inbound NY", …}
    // debugger

    let logo;
    let completeThe = "";
    let withTxt = "";
    // if task type is "Call", insert phone logo
    if (task.type === "Call") {
      logo = (<svg height="15pt" viewBox="0 0 511.99844 511" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m493.132812 346.726562-49.878906-49.878906c-11.949218-11.949218-27.835937-18.527344-44.734375-18.527344-16.863281 0-32.730469 6.558594-44.671875 18.46875-.027344.027344-.050781.050782-.078125.078126-.007812.007812-.019531.019531-.027343.023437l-34.472657 34.476563-138.1875-138.191407 34.472657-34.46875c.082031-.082031.164062-.167969.242187-.25 11.824219-11.925781 18.332031-27.726562 18.332031-44.53125 0-16.898437-6.582031-32.785156-18.53125-44.734375l-49.90625-49.910156c-.121094-.125-.242187-.25-.367187-.375-11.941407-11.871094-27.78125-18.40625-44.621094-18.40625-16.820313 0-32.644531 6.519531-44.574219 18.367188-.136718.132812-.269531.265624-.402344.402343-21.0625 21.066407-44.125 44.125-44.757812 44.757813-32.359375 32.359375-39.644531 84.851562-20.515625 147.804687 18.148437 59.722657 58.230469 122.707031 112.867187 177.347657 76.03125 76.027343 168.582032 123.257812 241.546876 123.257812 34.46875 0 63.378906-10.6875 83.582031-30.894531.617187-.613281 23.71875-23.714844 44.804687-44.800781.121094-.121094.242188-.242188.363282-.363282 24.375-24.53125 24.457031-64.34375.195312-88.976562-.21875-.230469-.445312-.457032-.679688-.675782zm0 0" /><path d="m352.523438 226.914062c2.929687 2.929688 6.765624 4.394532 10.605468 4.394532 3.835938 0 7.675782-1.464844 10.601563-4.394532l56.335937-56.328124 22.863282 22.859374c3.910156 3.914063 9.652343 5.351563 14.949218 3.75 5.292969-1.601562 9.277344-5.988281 10.359375-11.414062l33.46875-167.339844c.984375-4.917968-.554687-10-4.101562-13.546875-3.546875-3.546875-8.628907-5.082031-13.546875-4.101562l-167.335938 33.46875c-5.425781 1.085937-9.8125 5.070312-11.414062 10.363281-1.601563 5.292969-.160156 11.039062 3.75 14.953125l22.863281 22.859375-56.335937 56.324219c-2.8125 2.8125-4.390626 6.628906-4.394532 10.605469 0 3.980468 1.582032 7.792968 4.394532 10.605468zm0 0" /></svg>);

      // if task type is "LinkedIn message", insert phone logo
    } else if (task.type === "LinkedIn message") {
      logo = (<svg height="15pt" viewBox="0 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" /></svg>);

      // if task type is "Manual task", insert clip board logo
    } else if (task.type === "Manual task") {
      logo = (<svg height="15pt" viewBox="-59 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m344.675781 39.398438h-48.671875v-19.398438c0-11.046875-8.953125-20-20-20h-157.339844c-11.046874 0-20 8.953125-20 20v19.398438h-48.664062c-27.570312 0-50 22.429687-50 50v372.601562c0 27.570312 22.429688 50 50 50h294.675781c27.570313 0 50-22.429688 50-50v-372.601562c0-27.570313-22.433593-50-50-50zm-88.671875.601562v38.800781h-117.34375c0-13.292969 0-24.273437 0-38.800781zm98.671875 422c0 5.515625-4.488281 10-10 10h-294.675781c-5.515625 0-10-4.484375-10-10v-372.601562c0-5.511719 4.484375-10 10-10h48.660156v19.402343c0 11.046875 8.957032 20 20 20h157.34375c11.042969 0 20-8.953125 20-20v-19.402343h48.671875c5.511719 0 10 4.488281 10 10zm-64.535156-228.480469c7.8125 7.8125 7.8125 20.476563 0 28.285157l-105.101563 105.101562c-7.808593 7.8125-20.472656 7.8125-28.285156 0l-52.230468-52.230469c-7.808594-7.808593-7.808594-20.472656 0-28.285156 7.8125-7.808594 20.472656-7.808594 28.285156 0l38.089844 38.089844 90.957031-90.957031c7.8125-7.8125 20.472656-7.8125 28.285156-.003907zm0 0" /></svg>);
      completeThe = "complete the";
      withTxt = "with";
    }

    const { isMouseOver, isClicked } = this.state;

    let rowLeft;
    if (isClicked) {
      rowLeft = (
        <div className="notes-on-click">
          Did you {completeThe} {task.type.toLowerCase()} {withTxt} {task.person}?
        </div>
      );

    } else {
      rowLeft = (
        <>
          <span className="logo">{logo}</span>
            <div className="notes-person">
              <div className="notes">
                {task.notes}
              </div>
              <div className="type-person">
                <span className="type">{task.type}</span> {(task.type === "Manual task") ? <span className="with">{"with"}</span> : ""} <span className="person">{task.person}</span>
              </div>
            </div>
        </>
      );
    }

    return (
      <>
      <div className={isClicked ? "left-arrow" : "left-arrow hidden"}>
        <svg
          height="15pt" width="15pt"
          data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          // className={isMouseOverRow ? "details-hovered" : ""}
        ><path d="M174.54,508.94,420.1,263.39a10.74,10.74,0,0,0,0-14.75L174.53,3.06a10.43,10.43,0,0,0-14.75,0L92,70.8a10.43,10.43,0,0,0,0,14.75L262.47,256,92,426.46a10.73,10.73,0,0,0,0,14.75l67.75,67.73A10.43,10.43,0,0,0,174.54,508.94Z" /></svg>
      </div>

      <div 
        className={isLastTime ? "row last" : (index === 0 ? "row first" : "row")} 
        id={isClicked ? "clicked" : "not-clicked"}
        key={index}
        onMouseEnter={() => this.setState({isMouseOver: true})}
        onMouseLeave={() => this.setState({isMouseOver: false})}
        onClick={() => this.setState({isClicked: !this.state.isClicked})}
      >
        {/* <div className={isClicked ? "left-arrow" : "left-arrow hidden"}>
          <svg
            height="15pt" width="15pt"
            data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            // className={isMouseOverRow ? "details-hovered" : ""}
          ><path d="M174.54,508.94,420.1,263.39a10.74,10.74,0,0,0,0-14.75L174.53,3.06a10.43,10.43,0,0,0-14.75,0L92,70.8a10.43,10.43,0,0,0,0,14.75L262.47,256,92,426.46a10.73,10.73,0,0,0,0,14.75l67.75,67.73A10.43,10.43,0,0,0,174.54,508.94Z" /></svg>
        </div> */}

        <div className="row-left">
          {rowLeft}
        </div>
        
        <div className="row-right">
          <Icon 
            isMouseOverRow={isMouseOver}
            isRowClicked={isClicked} 
            type="delete"
            // onClick={() => handleDeleteTask(task.id, task.time)}
            />

          <Icon 
            isMouseOverRow={isMouseOver}
            isRowClicked={isClicked} 
            type="complete"
            onClickIcon={() => handleDeleteTask(task.id, task.time)}
          />

          <Icon 
            isMouseOverRow={isMouseOver}
            isRowClicked={isClicked} 
            type="details"
          />
        </div>
      </div>
      </>
    );
  }
}


export default Task;
