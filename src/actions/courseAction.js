import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionType";
// action creator
export function saveCourse(course) {
  // action
  return courseApi.saveCourse(course).then((savedCourse) => {
    // hey dispatcher , go tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: actionType.CREATE_COURSE,
      course: savedCourse
    });
  });
}
