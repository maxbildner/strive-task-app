// EXAMPLE REDUX STORE:
// {
//   tasks: {
//     1: {
//       id: 1,
//       type: “call” 	                  // can be “call”, or “manual”
//       body: “Call Max Bildner”
//       time: 9am - 10am
//       completed: false
//     },
//     2: {
//       id: 2,
//       type: “call” 	                  // can be “call”, or “manual”
//       body: “Call Max Bildner”
//       time: 9am - 10am
//       completed: false
//     }
//   }
// }


// import { ADD_TODO, DELETE_TODOS, COMPLETE_TODO } from '../actions/userActions';
// import { merge } from 'lodash';

const predefinedState = {
};


// set default state to null if not passed in
const tasks = (oldState = predefinedState, action) => {

  // prevent us from accidentally mutating state
  Object.freeze(oldState);

  let newState;

  return oldState;
}

export default tasks;