import { combineReducers } from 'redux';
import tasks from './tasksReducer';

const rootReducer = combineReducers({

  // same as tasks: tasks
  tasks,                            
});

export default rootReducer;

// EXAMPLE REDUX STORE:
// {
//   "9:00 - 10:00a": {
//     1: {
//       id: 1,
//       type: "Call", 	                      // can be "CALL" or "MANUAL", or "LI" (linked in message)
//       person: "Avni Submaranian",
//       time: "9:00 - 10:00a",
//       notes: "Inbound NY",
//       completed: false
//     },
//     2: {
//       id: 2,
//       type: "Manual task",
//       person: "Malik Simpson",
//       time: "9:00 - 10:00a",
//       notes: "Rekindling ancient members",
//       completed: false
//     },
//     3: {
//       id: 3,
//       type: "Call",
//       person: "Jabroni F. Myers",
//       time: "9:00 - 10:00a",
//       notes: "Shaming bottom-feeders",
//       completed: false
//     },
//   },
//   "11:15a - 12:00p": {
//     4: {
//       id: 4,
//       type: "LinkedIn message",
//       person: "Yvette Mok",
//       time: "11:15a - 12:00p",
//       notes: "Ignore and solicit on",
//       completed: false
//     },
//     5: {
//       id: 5,
//       type: "Manual task",
//       person: "Xavier St. D'Augustine",
//       time: "11:15a - 12:00p",
//       notes: "Ignore and solicit on",
//       completed: false
//     },
//   }
// };