import React from "react";
import { connect } from "react-redux";

import * as toolActions from "../../redux/actions/toolActions";
import PropTypes from "prop-types";

import createTool from "./../../redux/actions/toolActions";
import { bindActionCreators } from "redux";

class TP extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     tool: {
  //       title: ""
  //     }
  //   };
  //   // this.handleChange = this.handleChange.bind(this); // (2) Binding in the constructor
  // }

  state = {
    //this is class field
    tool: {
      title: ""
    }
  };

  // handleChange(event) {
  //   const tool= { ...this.state.tool, title: event.target.value }; //Object Shorthand Syntax
  //   this.setState({ tool: tool});
  // }
  handleSubmit = event => {
    event.preventDefault();
    // debugger;
    // this.props.dispatch(toolActions.createTool(this.state.tool));
    // this.props.createTool(this.state.tool);
    this.props.actions.createTool(this.state.tool);
    // alert(this.state.tool.title);
  };
  handleChange = event => {
    //class field()
    const tool = { ...this.state.tool, title: event.target.value };
    this.setState({ tool: tool });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>My Stack</h2>
        <h3>Add Tools</h3>
        <input
          type="text"
          // onChange={this.handleChange.bind(this)}   //dont do this it will cause re render (1)
          onChange={this.handleChange}
          value={this.state.tool.title}
        />

        <input type="submit" value="save" />
        <div className="tools">
          {this.props.tools.map(tool => (
            <div key={tool.title}>{tool.title}</div>
          ))}
        </div>
      </form>
    );
  }
}

TP.propTypes = {
  tools: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // createTool: PropTypes.func.isRequired
  // dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  // debugger;
  //Be Specific only request the data u need
  return {
    tools: state.tools
  };
}

// const mapDispatchToProps = {
//   createTool: toolActions.createTool
// }; // declare it as object rather than function ⤵

function mapDispatchToProps(dispatch) {
  return {
    // createTool: tool => dispatch(toolActions.createTool(tool)) //Action creators must be called by dispatch
    actions: bindActionCreators(toolActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TP);
