import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // setState를 이용해야 react가 state 변경됨을 감지하고 render가 다시 일어남.
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({
      count: count < 0 ? 0 : count,
    });
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <ul className="habits">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
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
