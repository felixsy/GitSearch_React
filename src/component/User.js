import React, { Component } from 'react'
import Useritems from './UserItems';

export default class User extends Component {
    state = {
        users: [{

            fullname: "Felix Jnr. Odalonu",
            username: "felixsy",
            profile: "http://drexeh.com",
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtjNSFuIsm91BVciG1kIU46o2qBON0PQtP14xtuIuClke4FAa"
        },
        {
            fullname: "Hendrick Odalonu",
            username: "hdks",
            profile: "http://drexeh.com",
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtjNSFuIsm91BVciG1kIU46o2qBON0PQtP14xtuIuClke4FAa"
        },

        {
            fullname: "Keynes Odalonu",
            username: "peter-k",
            profile: "http://drexeh.com",
            imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtjNSFuIsm91BVciG1kIU46o2qBON0PQtP14xtuIuClke4FAa"
        }
        ]
    };

    render() {
       
        return (
                <div className="container">
                    <div className="row">
                        {this.props.users.map(user=>(                          
                            <Useritems key={user.id} user={user}>

                            </Useritems>
                        ))}
                    </div>
                </div>
                    )
                }
            }
            
