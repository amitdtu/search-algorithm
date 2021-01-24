import React, { Component } from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'

class Header extends Component {
    routeArray = [
        {slug: '/linear-search', text: 'Linear Search'},
        {slug: '/binary-search', text: 'Binary Search'},
    ]
    render() {
        return (
            <>
                {/* <Navbar variant="dark" className="bg-purple">
                    <Navbar.Brand  href="#home">
                    Algorithm Visualization
                    </Navbar.Brand>
                </Navbar> */}
                <Navbar  variant="dark" className="bg-purple">
                    <Navbar.Brand >Algorithm Visualization</Navbar.Brand>
                    <Nav className="ml-auto">
                            {this.routeArray.map((obj,idx) => 
                                 <NavLink key={idx} to={obj.slug} class="nav-item">
                                 <a class="nav-link" >{obj.text}</a>
                                </NavLink>
                            )}
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default withRouter(Header)
