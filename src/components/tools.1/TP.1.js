import React from "react";
import { connect } from "react-redux";

import * as toolActions from "../../redux/actions/toolActions";
import PropTypes from "prop-types";

import createTool from "./../../redux/actions/toolActions";
import { bindActionCreators } from "redux";

class TP1 extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("LOAding courses failed" + error);
    });
  }
  render() {
    return (
      <>
        <h2>My Stack</h2>

        {this.props.tools.map(tool => (
          <div key={tool.title}>{tool.title}</div>
        ))}
      </>
    );
  }
}

TP1.propTypes = {
  tools: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    tools: state.tools
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toolActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TP1);
