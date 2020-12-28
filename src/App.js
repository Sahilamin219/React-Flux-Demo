import React from "react";
import "./styles.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import Header from "./components/common/Header";
import { Route } from "react-router-dom";

export default function App() {
  // function getPage() {
  //   const route = window.location.pathname;
  //   if (route === "/courses") return <CoursesPage />;
  //   if (route === "/about") return <AboutPage />;
  //   return <HomePage />;
  // }
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}
// export default App;
// for render Header always put this after it {getPage()}
