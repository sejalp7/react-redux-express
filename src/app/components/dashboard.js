import React from 'react';
import { connect } from 'react-redux'

export const Dashboard = ({groups}) => (
      <div className="Dashboard">
        { groups.map(group => (<div><h2>{group.name}</h2></div>))}
      </div>
)

 function mapStatetoProps(state) {
   return {
     groups: state.groups
   }
 }
  
  export const ConnectedDashBoard = connect(mapStatetoProps)(Dashboard);
  