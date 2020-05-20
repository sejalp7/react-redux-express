import React from 'react';
import {connect} from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
    <h3>
{name}
    </h3>
  <div>
      {tasks.map(task => (
          <Link to={`/task/${task.id}`} key={task.id}>
           <div>
                    {task.name}
                </div>
          </Link>
     ))}
      <button onClick={()=> createNewTask(id)}>Add New Task</button>
  </div>
  </div>
);

const mapStatetoProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            console.log("Creating Task", id);
            dispatch(requestTaskCreation(id));
        }
    }
}

export const ConnectedTaskList = connect(mapStatetoProps, mapDispatchtoProps)(TaskList);