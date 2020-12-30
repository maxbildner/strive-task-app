import { DELETE_TASK, COMPLETE_TASK } from '../actions/userActions';
// import { merge } from 'lodash';

// prepopulated store with 5 tasks
const predefinedState = {
  "9:00 - 10:00a": {
    1: {
      id: 1,
      type: "Call", 	                      // can be "CALL" or "MANUAL", or "LI" (linked in message)
      person: "Avni Submaranian",
      time: "9:00 - 10:00a",
      notes: "Inbound NY",
      completed: false
    },
    2: {
      id: 2,
      type: "Manual task", 	                      
      person: "Malik Simpson",
      time: "9:00 - 10:00a",
      notes: "Rekindling ancient members",
      completed: false
    },
    3: {
      id: 3,
      type: "Call", 	                      
      person: "Jabroni F. Myers",
      time: "9:00 - 10:00a",
      notes: "Shaming bottom-feeders",
      completed: false
    },
  },
  "11:15a - 12:00p": {
    4: {
      id: 4,
      type: "LinkedIn message", 	                      
      person: "Yvette Mok",
      time: "11:15a - 12:00p",
      notes: "Ignore and solicit on",
      completed: false
    },
    5: {
      id: 5,
      type: "Manual task", 	                  
      person: "Xavier St. D'Augustine",
      time: "11:15a - 12:00p",
      notes: "Ignore and solicit on",
      completed: false
    },
  }
};


// set default state to null if not passed in
const tasks = (oldState = predefinedState, action) => {

  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  let newState;
  switch (action.type) {

    case DELETE_TASK:
      // action == { type: "DELETE_TASK", taskId: 4, time: "11:15a - 12:00p" }

      // copy timeBlock
      let timeBlockCopy = Object.assign({}, oldState[action.time]);

      // delete obj from timeblock based off of taskId
      delete timeBlockCopy[action.taskId];

      // update newState
      newState = Object.assign({}, oldState, {
        [action.time]: timeBlockCopy
      });

      return newState;

    default:
      return oldState;
  }
}

export default tasks;