import { EventEmitter } from "events";
import { useCallback } from "react";
import Dispatcher from "../appDispatcher";
import actionType from "../actions/actionType";

// our store need to emit an event each time a change occurs;
const CHANGE_EVENT = "change";
let courses_ = [];
class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    // this will allow React component to subscribe to our store so
    // they are notified when changes occur
    this.on(CHANGE_EVENT, useCallback);
  }
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, useCallback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCourses() {
    return courses_;
  }
  getCoursesBySlug(slug) {
    return courses_.find((course) => course.slug === slug);
  }
}

const store = new CourseStore(); //creating a instance and then exporting it

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionType.CREATE_COURSE:
      courses_.push(action.course);
      store.emitChange(); //anytime the store changes, we need to call emitChange
      break;
    case actionType.LOAD_COURSES:
      courses_ = action.courses_list;
      store.emitChange();
      break;
    case actionType.UPDATE_COURSE:
      // goal: map over array of courses and replace the course we want to update
      courses_ = courses_.map((course) =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    default:
    //nothing to do here
  }
});

export default store;
// Next, we need to register our store with the dispatcher

// Goal(for loading courses when needed):
// 1.suscribe to Flux Store
// 2.if ocurses haven't been loaded, call loadedCourses action
