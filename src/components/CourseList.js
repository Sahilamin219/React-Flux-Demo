import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteCourse } from "./../actions/courseAction";

export function CourseList({ courses, ...rest }) {
  const x = ["sahil", "amin"];
  const j = x.map((item) => <li>{item}</li>);
  return (
    <>
      {j.map((item) => (
        <t>{item}</t>
      ))}
      <table className="table">
        {/* {console.log(props)} */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((courses) => {
            return (
              <tr key={courses.id}>
                <td>
                  <Link to={"/course/" + courses.slug}>{courses.Title}</Link>
                </td>
                <td>{courses.authorId}</td>
                <td>{courses.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteCourse(courses.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};
// CourseList.defaultProps = {
//   courses: []
// };
