// EXAMPLE REDUX STORE:
// {
//   tasks: {
//     1: {
//       id: 1,
//       type: "MANUAL", 	                  // can be "CALL" or "MANUAL", or "LI" (linked in message)
//       person: "Malik Simpson",
//       time: "9:00 - 10:00a",
//       notes: "Rekindling ancient members",
//       completed: false
//     },
//     2: {
//       id: 2,
//       type: "CALL", 	                    
//       person: "Max Bildner,
//       time: 9am - 10am,
//       completed: false
//     },
//     completed: [ ]                       // will contain ids of completed tasks
//   }
// }


// import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../actions/userActions';
// import { merge } from 'lodash';

// prepopulated store with 5 tasks
const predefinedState = {
  1: {
    id: 1,
    type: "CALL", 	                      // can be "CALL" or "MANUAL", or "LI" (linked in message)
    person: "Avni Submaranian",
    time: "9:00 - 10:00a",
    notes: "Inbound NY",
    completed: false
  },
  2: {
    id: 2,
    type: "MANUAL", 	                      
    person: "Malik Simpson",
    time: "9:00 - 10:00a",
    notes: "Rekindling ancient members",
    completed: false
  },
  3: {
    id: 3,
    type: "CALL", 	                      
    person: "Jabroni F. Myers",
    time: "9:00 - 10:00a",
    notes: "Shaming bottom-feeeders",
    completed: false
  },
  4: {
    id: 4,
    type: "LI", 	                      
    person: "Yvette Mok",
    time: "11:15a - 12:00p",
    notes: "Ignore and solicit on",
    completed: false
  },
  5: {
    id: 5,
    type: "MANUAL", 	                  
    person: "Xavier St. D'Augustine",
    time: "11:15a - 12:00p",
    notes: "Ignore and solicit on",
    completed: false
  },
  completed: []
};


// set default state to null if not passed in
const tasks = (oldState = predefinedState, action) => {

  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  let newState;

  return oldState;
}

export default tasks;