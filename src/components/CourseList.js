import React from "react";
// import Proptypes from 'prop-types';

export function CourseList({ courses, ...rest }) {
  const x = ["sahil", "amin"];
  const j = x.map((item) => <li>{item}</li>);

  return (
    <>
      {j.map((item) => (
        <t>{item}</t>
      ))}
      <table className="table">
        {console.log(courses)}
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((courses) => {
            return (
              <tr key={courses.id}>
                <td>{courses.Title}</td>
                <td>{courses.authorId}</td>
                <td>{courses.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// CourseList.propTypes={
//   courses : Proptypes.array.isRequired
// };
