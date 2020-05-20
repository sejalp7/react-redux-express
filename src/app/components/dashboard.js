import React from 'react';
import { connect } from 'react-redux'
import { ConnectedTaskList } from './taskList';

export const Dashboard = ({groups}) => (
      <div className="Dashboard">
        { groups.map(group => (
          <ConnectedTaskList key={group.id} id={group.id} name={group.name}/>
        ))}
      </div>
)

 function mapStatetoProps(state) {
   return {
     groups: state.groups
   }
 }
  
  export const ConnectedDashBoard = connect(mapStatetoProps)(Dashboard);
  