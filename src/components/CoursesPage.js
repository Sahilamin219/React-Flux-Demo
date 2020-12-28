import React from "react";
import { getCourses } from "../api/courseApi"; //this will call our mock api
// to get list of all courses.
class CoursePage extends React.Component {
  // constructor(props){
  //   super(props);//this ensures base classes constructor run first
  //   // after that happens we are ready to declare of state
  //   this.state={
  //     courses:[]
  //   };
  // }
  // it works fine but we actually don't need a constructor to declare a class state
  state = {
    courses: []
  }; //goal:request list of courses when this pages loads
  // component must be mounted before we call setState
  // fetch is Promise based api and we use .then function to handle a response
  // Promises represent a future value.handle Async calls
  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
    // getCourses().then(function(courses){
    // here we have refernce to the list of courses (we are ready to set the state)
    // this.state.courses=courses;//don't so this
    // this.setState({courses:courses});
    // });
  }
  render() {
    return <h2> All Coureses</h2>;
  }
}
export default CoursePage;
