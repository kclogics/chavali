import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { bindActionCreators } from "redux";

import CourseList from "./CourseList";
import * as toolActions from "../../redux/actions/toolActions";
import * as authorActions from "../../redux/actions/authorActions";

class TP1 extends React.Component {
  componentDidMount() {
    const { tools, authors, actions } = this.props;
    if (tools.length === 0) {
      actions.loadCourses().catch(error => {
        alert("LOAding courses failed" + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("LOAding authors failed" + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>My Stack</h2>
        <CourseList courses={this.props.tools} />
        {/* {this.props.tools.map(tool => (
          <div key={tool.title}>{tool.title}</div>
        ))} */}
      </>
    );
  }
}

TP1.propTypes = {
  authors: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    tools:
      state.authors.length === 0
        ? []
        : state.tools.map(tools => {
            return {
              ...tools,
              authorName: state.authors.find(a => a.id === tools.authorId).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(toolActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TP1);
