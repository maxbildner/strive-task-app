// use constants incase there's a typo, we fail loudly
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";


// ACTION CREATORS
export const deleteTask = (taskId, time) => {

  return ({
    type: DELETE_TASK,
    taskId, 
    time
  });
}