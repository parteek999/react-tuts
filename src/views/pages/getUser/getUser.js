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

/**
 * import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./styles.css";

function App() {
  const data = [
    {
      name: "naveen",
      age: 14,
      address: "jgjg"
    },
    {
      name: "test",
      age: 18,
      address: "jggkhkg"
    },
    {
      name: "naveen",
      age: 14,
      address: "jgjg"
    },
    {
      name: "test",
      age: 18,
      address: "jggkhkg"
    }
  ];
  return (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Age",
            accessor: "age",
            Cell: props => {
              console.log(props);
              return (
                <div>
                  <span className="number">{props.value}</span>
                  <br />
                  <span className="number">{props.original.address}</span>
                </div>
              );
            } // Custom cell components!
          }
        ]}
        defaultPageSize={data.length}
        showPagination={false}
        sortable={false}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

 */