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
  getCoursesBySlug() {
    return courses_.find((course) => course.slug === slug);
  }
}

const store = new CourseStore(); //creating a instance and then exporting it

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionType.CREATE_COURSE:
      courses_: push(actions.course);
      store.emitChange(); //anytime the store changes, we need to call emitChange
      break;
    default:
    //nothing to do here
  }
});

export default CourseStore;
// Next, we need to register our store with the dispatcher
