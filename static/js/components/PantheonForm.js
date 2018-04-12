import React from "react";
import PropTypes from "prop-types";

export default class PantheonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namesSource: "",
      textsSource: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    console.log(`User selected ${target.name}: ${target.value}`);
    this.setState(
      {
        [target.name]: target.value
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Source of names:
          <select name="namesSource" value={this.state.namesSource} onChange={this.handleChange}>
            {this.props.sourcesOfNames.map(namesSource => (
              <option value={namesSource}>{namesSource}</option>
            ))}
          </select>
        </label>
        <label>
          Source of texts:
          <select name="textsSource" value={this.state.textsSource} onChange={this.handleChange}>
            {this.props.sourcesOfTexts.map(textsSource => (
              <option value={textsSource}>{textsSource}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Generate" />
      </form>
    );
  }
}

PantheonForm.propTypes = {
  sourcesOfNames: PropTypes.array.isRequired,
  sourcesOfTexts: PropTypes.array.isRequired
}
