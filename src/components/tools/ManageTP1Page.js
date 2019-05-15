import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { loadCourses } from "../../redux/actions/toolActions";
import { loadAuthors } from "../../redux/actions/authorActions";

class ManageTP1Page extends React.Component {
  componentDidMount() {
    const { tools, authors, actions, loadCourses, loadAuthors } = this.props;
    if (tools.length === 0) {
      loadCourses().catch(error => {
        alert("LOAding courses failed" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("LOAding authors failed" + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Manage Stack</h2>
      </>
    );
  }
}

ManageTP1Page.propTypes = {
  authors: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    tools: state.tools,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors
}; //more neat using bject form rather than a function as earlier TP1

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTP1Page);
