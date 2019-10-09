import React, { Component } from 'react'
import Useritems from './UserItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class User extends Component {
    static propType ={
        user: PropTypes.object.isRequired,
    }

    render() {
        if (this.props.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <Spinner></Spinner>
                    </div>
                </div>
            )

        } else {

            return (
                <div className="container">
                    <div className="row">
                        {this.props.users.map(user => (
                            <Useritems key={user.id} user={user}>

                            </Useritems>
                        ))}
                    </div>
                </div>
            )
        }
    }
}