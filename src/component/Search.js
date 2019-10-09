import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Search extends Component {
    
  static propTypes ={
    searchUsers : PropTypes.func.isRequired,
  }

    state={
        text: ""
    }

    onChangehandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }

   onSubmitHandler = (e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: ""});
    }

    render() {    
        return (
            <div className="col-sm-12 mx-auto my-3">
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-sm-9">
                            <input type='search' name="text" className="form-control mb-2" placeholder="Enter username to search"
                                onChange={this.onChangehandler} value={this.state.text}></input>
                        </div>
                        <div className="col-sm-3">
                            <input type="submit" value="Search" className="form-control btn btn-primary"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


