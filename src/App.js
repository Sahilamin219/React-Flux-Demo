import React from "react";
import "./styles.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import Header from "./components/common/Header";
import NotFoundPage from "./components/NotFoundPage";
import ManageCoursePage from "./components/ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // function getPage() {
  //   const route = window.location.pathname;
  //   if (route === "/courses") return <CoursesPage />;
  //   if (route === "/about") return <AboutPage />;
  //   return <HomePage />;
  // }
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
// export default App;
// for render Header always put this after it {getPage()}
