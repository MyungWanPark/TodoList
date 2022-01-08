import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    console.log("navbar rendered!");
    return (
      <nav className="navbar">
        <FontAwesomeIcon icon={faLeaf} className="navbar-icon" />
        <span className="nav_title">Habit Tracker</span>
        <span className="habit-category-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
