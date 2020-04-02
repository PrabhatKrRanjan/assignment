import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="container text-center p-5">
                <div className="p-5 display-3">Page Not Found</div>
                <Link className="text-success h3" to='/home'> Go Home Page</Link>
            </div>
        )
    }
}
