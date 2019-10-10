import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div className="mt-2 Jumbotron bg-info text-center text-white py-5">
                <p className="display-4"> About GitUser App</p>
                <h2> Version 1.0.0</h2>
            </div>
            <div className="col-sm-8 mx-auto mt-3">
                <p className="lead">This is a simple Github Users Finder, which you can use to search any user with its username, it will find and show all users with such related name used in the search.</p>
            </div>
        </Fragment>
    )
}

export default About
