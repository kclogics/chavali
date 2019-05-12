import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

// class MyComponent extends React.Component {
//   state = {
//     redirect: false
//   };
//   setRedirect = () => {
//     this.setState({
//       redirect: true
//     });
//   };
//   renderRedirect = () => {
//     if (this.state.redirect) {
//       return <Redirect to="/users" />;
//     }
//   };
//   render() {
//     return (
//       <div>
//         {this.renderRedirect()}
//         <button onClick={this.setRedirect}>Redirect</button>
//       </div>
//     );
//   }
// }
class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />

        {this.props.courses.map(course => (
          <p key={course.title.toString()}>{course.title}</p>
        ))}

        {/* <MyComponent /> */}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
