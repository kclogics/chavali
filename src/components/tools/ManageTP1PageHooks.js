import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { loadCourses } from "../../redux/actions/toolActions";
import { loadAuthors } from "../../redux/actions/authorActions";

import CourseForm from "./CourseForm";
import { newCourse } from "../../mock/mockData";

function ManageTP1Page({
  tools,
  authors,
  actions,
  loadCourses,
  loadAuthors,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
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
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  return (
    <>
      <h2>Manage Stack</h2>
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onChange={handleChange}
      />
    </>
  );
}

ManageTP1Page.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    course: newCourse,
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
