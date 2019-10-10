import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Search extends Component {

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUser: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,

    }

    state = {
        text: ""
    }

    onChangehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please Enter Username to Search', 'warning');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: "" });
        }
    }

    render() {

        const { showClear, clearUser } = this.props;
        return (
            <div className="col-sm-12 mx-auto my-3">
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-sm-9">
                            <input type='search' name="text" className="form-control mb-2" placeholder="Enter Github username to search e.g felixsy"
                                onChange={this.onChangehandler} value={this.state.text}></input>
                        </div>
                        <div className="col-sm-3">
                            <input type="submit" value="Search" className="form-control btn btn-primary"></input>
                        </div>
                        {showClear &&
                            <div className="col-sm-12">
                                <button className="btn btn-danger form-control" onClick={clearUser}>Clear</button>
                            </div>
                        }

                    </div>
                </form>
            </div>
        )
    }
}


