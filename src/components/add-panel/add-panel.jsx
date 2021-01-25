import { Component, React } from "react";

export default class AddPanel extends Component {
  state = {
    text: '',
  };

  onTextChanged = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="what needs to be done?"
          onChange={this.onTextChanged}
          value={this.state.text}
        />
        <button>
          Add
        </button>
      </form>
    );
  }
}
