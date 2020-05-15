import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
    render() {
        return (
            <div>
                <h1>Summary Page</h1>
                <Link to="/account_setup"><button>Go Back</button></Link>
            </div>
        )
    }
}
export default Summary;