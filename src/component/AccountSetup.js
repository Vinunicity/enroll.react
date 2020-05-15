import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AccountSetup extends Component {
    render() {
        return (
            <div>
                
                <h1>Account set up page</h1>
                <Link to="/">
                    <button>GoBack</button>
                </Link>
                <Link to="/summary">
                    <button>Continue</button>
                </Link>
            </div>
        )
    }
}
export default AccountSetup;