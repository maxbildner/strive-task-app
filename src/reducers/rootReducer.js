import { combineReducers } from 'redux';
import tasks from './tasksReducer';

const rootReducer = combineReducers({

  // same as tasks: tasks
  tasks,                            
});

export default rootReducer;

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