import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== null &&(
            <div className={`mt-3 alert alert-${alert.type}`}>
                {alert.msg}
            </div>
        )
    )
}

export default Alert
