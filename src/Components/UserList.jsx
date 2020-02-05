import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    render() {

        //Dönüştürülen props içerinde bulunan değer alındı.
        const users = this.props.users;
        console.log(users);
        if (users === undefined || users.length == 0) {
            return (
                <div className="alert alert-light" role="alert">
                    Kayıt bulunmamaktadır.</div>
            )
        }
        else {
            return (
                <div className="jumbotron vertical-center">
                    <table className="table table-hover text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">LastName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.lastname}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}


//State ekrana ait bir propsa dönüştrüldü
const mapStateToProps = (state) => {
    console.log(state.users);
    return { users: state.users };
}


export default connect(mapStateToProps)(UserList);