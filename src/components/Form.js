import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { fetchGiphies } from "../actions/giphyActions";

class Form extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    const search = e.target.value;
    this.setState({ search }, () => this.props.fetchGiphies(this.state));
  };

  render() {
    return (
      <div className="giphySelectionContainer">
        <TextField
          floatingLabelText="Search Here..."
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(() => ({}), { fetchGiphies })(Form);
