import React, { Component, Fragment } from 'react'
import spinner from '../spinner/spinner.jpg'
import '../App.css';

export default class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <img src={spinner} className="spinner align-right" alt="spinner"></img>
            </Fragment>
        )
    }
}
