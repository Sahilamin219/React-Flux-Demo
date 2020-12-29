import React from "react";
const ManageCoursePage = (props) => {
  debugger;
  return (
    <>
      <h2>Manage Courses</h2>
      {props.match.params.slug}
    </>
  );
};
export default ManageCoursePage;
// placehodler are prdefixes with : (slug)
