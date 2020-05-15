import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Starttpl extends Component {
    render() {
        return (
            <div>
                <h1>Start Page</h1>
                <Link to="/account_setup">
                    <button>Continue</button>
                </Link>
            </div>
        )
    }
}

export default Starttpl;