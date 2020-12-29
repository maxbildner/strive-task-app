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
//       type: “call” 	                                                        // can be “call”, or “manual”
//       body: “Call Max Bildner”
//       time: 9am - 10am
//       completed: false
//     },
//     2: {
//       id: 2,
//       type: “call” 	                                                        // can be “call”, or “manual”
//       body: “Call Max Bildner”
//       time: 9am - 10am
//       completed: false
//     }
//   }
// }
