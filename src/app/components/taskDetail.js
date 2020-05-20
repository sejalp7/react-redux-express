import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as mutation from '../store/mutations';

const TaskDetails = (
    id,
    comments,
    tasks,
    isComplete,
    groups,
    setTaskCompletion,
    setTaskName,
    setTaskGroup
) => (
        <div>
            <div>
                <input value={tasks.name} onChange={setTaskName}/>
            </div>
            <div>
                <button onClick={() => setTaskCompletion(id, !isComplete)}>{isComplete ?  'Reopen' : 'Complete'}</button>
            </div>
            <div>
                <select value={tasks.group}>
                    <option key={groups.id} value={groups.id} onChnage={setTaskGroup}>{groups.name}</option>
                </select>
            </div>
            <div>
                <Link to="/dashboard">
                    <button>Done</button>
                </Link>
            </div>

        </div>
    )

const mapStatetoProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return {
        id,
        task,
        groups,
        isComplete: task.isComplete
    }
};

const mapDispatchtoProps = (dispatch, ownProps) => {
   let id = ownProps.match.params.id;
   return {
       setTaskCompletion(id, isComplete) {
           dispatch(mutation.setTaskCreation(id, isComplete));
       },
       setTaskGroup(e) {
           dispatch(mutation.setTaskGroup(id, e.target.value));
       },
       setTaskName(e) {
           dispatch(mutation.setTaskName(id, e.target.value));
       }
   }
}

export const ConnectedTaskDetail = connect(mapStatetoProps, mapDispatchtoProps)(TaskDetails);
