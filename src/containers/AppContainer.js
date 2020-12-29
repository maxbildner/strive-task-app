import { connect } from 'react-redux';
import App from '../components/App';


// give app component acceess to tasks in store
const mapStateToProps = state => {
  // console.log(state);
  // state.tasks == { 9:00-10:00a:{ {}, {} }, 11-12p:{ {}, {} } } 

  return ({
    userTasks: state.tasks
  });
}


const mapDispatchToProps = dispatch => {
  return({
  });
}


export default connect(mapStateToProps, mapDispatchToProps)(App);