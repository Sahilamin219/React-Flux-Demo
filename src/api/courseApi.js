import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = "https://5fe8aeba2e12ee0017ab49a8.mockapi.io/details";
const baseUrl = process.env.REACT_APP_API_URL + "/courses";

export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse) // .then is called when async call is complete
    .catch(handleError);
}

export function getCourseBySlug(slug) {
  // it accepts a slug and returns a course. we can request a course
  // by slug from our mock api using a query string.
  // add slug the url of courses ..this will return course json .
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((courses) => {
        if (courses.length !== 1) throw new Error("Course not found: " + slug);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...course,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(course.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
// fetch is built into modern browsers so we can make HTTPS calls
// (fetch api without exporrting any other libiray)
