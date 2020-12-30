import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionType";
// action creator
export function saveCourse(course) {
  // action
  return courseApi.saveCourse(course).then((savedCourse) => {
    // hey dispatcher , go tell all the stores that a course was just created
    dispatcher.dispatch({
      //We need disptach Update_Course if working with an existing course (to know when to updatecourse or createcourse)
      actionType: course.id
        ? actionType.UPDATE_COURSE
        : actionType.CREATE_COURSE,
      course: savedCourse
    });
  });
}

// We are going to export a new function called
export function loadCourses(courses) {
  //body is ging to be same as saveCourse action creator just going to call a different API call to dispatch a different action
  return courseApi.getCourses().then((courses_list) => {
    dispatcher.dispatch({
      actionType: actionType.LOAD_COURSES,
      courses_list: courses_list
    });
  });
}
/*HOW DOES REACT FLUX WORK?
So far:-
we have made <action> and <store> folder with actionType.js, CourseAction.js and 
courseStore.js named files

We have a class CourseStore inside courseStore.js which have following Dispatcher methods
*addChangeListener - Allow React to notify
*removChangeListener - Unsuscribe the event for React
*emitChange - emit changes
*getCourse - return courses
*getCourseBySlug - find course by slug and return it
after which we Register Dispatcher*/

/* ------  REDUX VS FLUX  ------
In Flux, the logic of what to do on the data based on the received action 
is written in the store itself. ... In Redux, the logic of what to do on 
the data based on the received actions is in the reducer function that 
gets called for every action that gets dispatched (through the store API).*/
