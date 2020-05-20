import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas.mock';
import  * as mutations from "./mutations";
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        tasks(task= defaultState.tasks, action) {
            switch(action.type) {
                case mutations.CREATE_TASK:
                    return [...task, {
                        id: action.taskID,
                        name: "New Task",
                        owner: action.ownerID,
                        group: action.groupID,
                        isComplete: false
                    }]
                case mutations.SET_TASK_COMPLETE:
                    return task.map(task => {
                        return (task.id === action.taskID) ? {
                            ...task,
                            isComplete: action.isComplete
                        } : task;
                    })
                case mutations.SET_TASK_GROUP:
                    return task.map(task => {
                        return (task.id === action.taskID) ? {
                            ...task,
                            group: action.groupID
                        } : task
                    })
                case mutations.SET_TASK_NAME:
                    return task.map(task => {
                        return (task.id === action.taskID) ? {
                            ...task,
                            name: action.name
                        } : task
                    })
            }
            return task;
        },
        groups(groups=defaultState.groups,action) {
            return  groups;
        },
        comments(comments=defaultState.comments,action) {
            return comments;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleWare)
)

for(let saga in sagas) {
    sagaMiddleWare.run(sagas[saga]);
}