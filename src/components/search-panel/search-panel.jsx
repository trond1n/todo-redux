import { Component, React } from "react";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };
  onTermChange = (e) => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({
      term: e.target.value,
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="type to search"
          value={this.state.term}
          onChange={this.onTermChange}
        />
      </form>
    );
  }
}
