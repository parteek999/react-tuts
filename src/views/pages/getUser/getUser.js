import React, { Component } from "react";
import { getUsers } from './getUsers';
import '../../../card.css'

class Getuser extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        this._getUser();
    }
    _getUser = () => {
        getUsers().then((res) => {
            console.log(res.data, "hello");
            this.setState({
                users: res.data,
            });
        });
    };

    render() {
        let { users } = this.state;
        return (
           
            
                <table className="table"  align="center">
                    <thead className="th">
                        <tr>
                            <th>fullName</th>
                            <th>Email</th>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody className="td">
                        {users.map((m,index) => (
                            <tr key={index}>
                                <td>{m.name}</td>
                                <td>{m.email}</td>
                                <td>{m.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        );
    }
}

export default Getuser;