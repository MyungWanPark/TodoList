import React, { Component } from "react";

class AddHabit extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const inputName = this.inputRef.current.value;
    inputName && this.props.onAdd(inputName);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="write your new habit"
        />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default AddHabit;
