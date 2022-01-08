import React, { PureComponent } from "react";

class AddHabit extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const inputName = this.inputRef.current.value;
    inputName && this.props.onAdd(inputName);
    this.formRef.current.reset();
  };

  render() {
    console.log("add habit form rendered!");
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
