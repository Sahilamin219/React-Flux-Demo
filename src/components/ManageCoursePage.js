import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setsCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: null
  });
  function handleTitleChange(event) {
    // debugger;
    // course.title = event.target.title;//Treat state as immutable
    const updatedCourse = { ...course, title: event.target.value };
    // updatedCourse.title=event.targete.value;
    setsCourse(updatedCourse);
  }
  return (
    <>
      <h2>Manage Courses</h2>
      <Prompt when={true} message="Are you sure you want to leave ?" />
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </>
  );
};
export default ManageCoursePage;
// placehodler are prdefixes with : (slug)
// {props.match.params.slug}
