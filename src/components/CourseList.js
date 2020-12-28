import React from "react";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((courses) => {
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
  );
}
export default CourseList;
