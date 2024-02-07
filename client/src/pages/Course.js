import React from "react";
import { useParams } from "react-router-dom";
import courses from "../courseData";
import '../styles/course_comp.css';
import { NavLink } from "react-router-dom";


const Course = () => {
  const params = useParams();
  const { id } = params;

  const course = courses[id];
  console.log(course);

  return (
    <div className="course-Prerequisites">
      {/* Course details */}
      <div className="navigation">
        <h1> Welcome to {course.name} </h1>

        {/*

        <NavLink to={`${id}/videos`} activeClassName="active">
          <div className="video-box">Videos </div>
        </NavLink>

        <NavLink to={`${id}/pdfs`} activeClassName="active">
          <div className="pdf-box">PDFs</div>
        </NavLink>

        <NavLink to={`${id}/notes`} activeClassName="active">
          <div className="notes-box">Notes </div>
        </NavLink>

       <NavLink to={`${id}/chatgpt`} activeClassName="active">}
        <NavLink to={`${id}/chatgpt`} activeClassName="active">
          <div className="chatgpt-box">ChatGPT </div>
        </NavLink>
        */}

        <NavLink to={`/course/${id}/chatgpt`}>
          <div className="chatgpt-box">ChatGPT </div>
        </NavLink>

        <NavLink to={`/course/${id}/videos`}>
          <div className="video-box">Videos</div>
        </NavLink>

        <NavLink to={`/course/${id}/pdfs`}>
          <div className="pdf-box">PDFs</div>
        </NavLink>

        <NavLink to={`/course/${id}/notes`}>
          <div className="notes-box">Notes</div>
        </NavLink>



      </div>
    </div>
  );
};

export default Course;