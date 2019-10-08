import React from 'react'

function UserItems(props) {
    const { html_url, avatar_url, login } = props.user;
    return (
        <div className="col-sm-4 mt-3 text-center">
            <div className="card card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div><img src={avatar_url} className="rounded-circle profile-img" alt=""></img></div>

                    </div>
                    <div className="col-sm-6">                      
                        <p className="lead">{login}</p>
                        <a className="btn btn-danger" href={html_url}>View Profile</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserItems
