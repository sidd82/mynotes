import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-3">
                <a href="#!" className="brand-logo logo"><span className="orange-text text-darken-3">My</span><span className="grey-text text-lighten-4">Notes</span></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <a className="waves-effect waves-light btn orange darken-3 radius"><i className="material-icons left">account_circle</i>Login</a>
                        <a className="waves-effect waves-light btn orange darken-3 radius"><i className="material-icons left">add_circle</i>Register</a>
                    </ul>
            </div>
      </nav>
    )
  }
}

export default NavBar;
