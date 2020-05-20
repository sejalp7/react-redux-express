import { connect } from "react-redux";
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
<div>
    <Link to="/dashboard">
        <h3>
            My Application
        </h3>
    </Link>
</div>
);

export const ConnectedNavigation = connect(state=>state)(Navigation);