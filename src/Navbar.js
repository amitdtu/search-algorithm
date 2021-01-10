import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar variant="dark" className="bg-purple">
                    <Navbar.Brand  href="#home">
                    Linear Search
                    </Navbar.Brand>
                </Navbar>
                </>
        )
    }
}
