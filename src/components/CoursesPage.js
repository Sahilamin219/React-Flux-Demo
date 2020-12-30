import React, { useState, useEffect } from "react";
// import { getCourses } from "../api/courseApi"; //this will call our mock api
// to get list of all courses.
import CourseStore from "../store/courseStore";
import { CourseList } from "./CourseList";
import { Link } from "react-router-dom";
// class CoursePage extends React.Component {
function CoursePage() {
  const [courses, setCourses] = useState([]); //useState hook
  useEffect(() => {
    // getCourses().then((_courses) => setCourses(_courses));
    setCourses(CourseStore.getCourses());
  }, []);
  // constructor(props){
  //   super(props);//this ensures base classes constructor run first
  //   // after that happens we are ready to declare of state
  //   this.state={
  //     courses:[]
  //   };
  // }
  // it works fine but we actually don't need a constructor to declare a class state
  // state = {
  //   courses: []
  // }; //goal:request list of courses when this pages loads
  // component must be mounted before we call setState
  // fetch is Promise based api and we use .then function to handle a response
  // Promises represent a future value.handle Async calls
  // componentDidMount() {
  // getCourses().then((courses) => this.setState({ courses: courses }));
  // getCourses().then(function(courses){
  // here we have refernce to the list of courses (we are ready to set the state)
  // this.state.courses=courses;//don't so this
  // this.setState({courses:courses});
  // });
  // }
  // renderRow(courses) {
  //   return (
  //     <tr key={courses.id}>
  //       <td>{courses.Title}</td>
  //       <td>{courses.authorId}</td>
  //       <td>{courses.category}</td>
  //     </tr>
  //   );
  // }
  // render() {
  // render the lsit coursese in a table
  return (
    <>
      <h2> All Coureses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}
// }
export default CoursePage;
//{this.state.courses.map(courses => { })}
// when creating multiple child component dynamically its important to
// provide a key for each child
// Hooks  - useState, useEffect, useContext
//<tbody>{this.state.courses.map(this.renderRow)}</tbody>
//<tbody>{courses.map(this.renderRow)}</tbody>
// {/* <CourseList/> --- referncing it */}
//<CourseList courses={courses} header="Courses"/> to passdown the header string with returned array
