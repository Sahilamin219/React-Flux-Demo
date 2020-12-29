import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
// import * as courseApi from "../api/courseApi";
import CourseStore from "../store/courseStore";
import { toast } from "react-toastify";
import * as CourseAction from "../actions/courseAction";

const ManageCoursePage = (props) => {
  const [errors_me, setErrors] = useState({});
  const [course, setsCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: null
  });

  // Route params are parameters whose values are set dynamically in a
  // page's URL. This allows a route to render the same component while
  // passing that component the dynamic portion of the URL,
  // so that it can change its data based on the parameter.

  useEffect(() => {
    const slug = props.match.params.slug; //this will pull slug from the url - "/courses/:slug" (path)
    // now we have the reference to slug
    if (slug) {
      //if a slug is in course url
      // courseApi
      //   .getCourseBySlug(slug)
      //   .then((course_) => setsCourse(course_), [props.match.params.slug]);
      setsCourse(CourseStore.getCourseBySlug(slug));
    }
  });

  // function handleTitleChange(event) {
  //   // debugger;
  //   // course.title = event.target.title;//Treat state as immutable
  //   const updatedCourse = { ...course, title: event.target.value };
  //   // updatedCourse.title=event.targete.value;
  //   setsCourse(updatedCourse);
  // }
  // function handleCategoryChange(event) {
  //   const updatedCourse = { ...course, category: event.target.value };
  //   setsCourse(updatedCourse);
  // }
  function handleChange({ target }) {
    // const updatedCourse = { ...course, [event.target.name]: event.target.value };
    // setsCourse(updatedCourse);
    setsCourse({
      ...course,
      [target.name]: target.value
    });
  }
  function formIsValid() {
    const errors_ = {}; //set error as a object
    if (!course.title) errors_.title = "Title is required :(";
    if (!course.authorId) errors_.authorId = "authorId is required :(";
    if (!course.category) errors_.category = "category is required :(";

    setErrors(errors_);
    // form is valid if error object has no properties
    return Object.keys(errors_).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    //this will prevent the page from posting back to server
    // to save we will call the mock API ... json server will to db.json
    // courseApi.saveCourse(course);
    // this data will persist until i stop the app ..the db.json will reset on npm start
    // now lets call .then to handle the responeses
    // courseApi.saveCourse(course).then(() => {
    CourseAction.saveCourse(course).then(() => {
      // we could use <Redirect> here but heres a different approach
      // we are using history props since its was loaded using reacts
      // redirect component we have ascess to routers history object
      props.history.push("/courses");
      toast.success("Course saved !");
    });
  }
  return (
    <>
      <h2>Manage Courses</h2>
      <Prompt when={true} message="Are you sure you want to leave ?" />
      <CourseForm
        errors_me={errors_me}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};
export default ManageCoursePage;
// placehodler are prdefixes with : (slug)
// {props.match.params.slug}

// adding ability to edit courses (update managecourse page when it sees the course slug up in the URL)
// to make it happen we need to API to request the course when the component mounts .
