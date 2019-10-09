import React, { Component, Fragment } from 'react'
import spinner from '../spinner/spinner.jpg'

export default class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <img src={spinner}></img>
            </Fragment>
        )
    }
}
