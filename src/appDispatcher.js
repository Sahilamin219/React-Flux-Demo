import { Dispatcher } from "flux";
// create an instance of it
const dispatcher = new Dispatcher();
// and finally export it
export default dispatcher;
// theres only one dispatcher per page

// Store :-
// A store holds the whole state tree of your application.
// The only way to change the state inside it is to dispatch an action on it.
// A store is not a class. It's just an object with a few methods on it.

// It's simple to get access to the store inside a React component – no need
// to pass the store as a prop or import it, just use the connect function
// from React Redux, and supply a mapStateToProps function that pulls out
// the data you need. Then, inside the component, you can pass that data
// to a function that needs it.
