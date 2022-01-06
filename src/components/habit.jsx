import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  render() {
    return (
      <ul className="habits">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <button className="habit-button habit-decrease">
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
        <button className="habit-button habit-delete">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </ul>
    );
  }
}

export default Habit;