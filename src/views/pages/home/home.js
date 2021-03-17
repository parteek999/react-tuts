import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class home extends Component {
    render() {
        return (
            <div>
                <h1>this is home page</h1>
                <Link to="/Getuser">
                <button >move to another page  </button> 
              </Link>
                 
            </div>
        )
    }
}
