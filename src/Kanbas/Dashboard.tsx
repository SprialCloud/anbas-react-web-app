import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./enrollmentreducer";
import { useNavigate } from "react-router-dom";

type EnrollmentStatus = { [key: string]: boolean };

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const dispatch = useDispatch();
  const [showEnrollments, setShowEnrollments] = useState(false);

  const toggleShowAllCourses = () => setShowEnrollments(!showEnrollments);

  const userCourses = courses.filter((courseItem) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === courseItem._id
    )
  );

  const handleEnrollToggle = (courseId: string, isEnrolled: boolean) => {
    if (currentUser) {
      if (isEnrolled) {
        dispatch(unenroll({ userId: currentUser._id, courseId }));
      } else {
        dispatch(enroll({ userId: currentUser._id, courseId }));
      }
    }
  };

  const renderEnrollmentButton = (courseId: string, isEnrolled: boolean) => {
    return isEnrolled ? (
      <button
        onClick={() => handleEnrollToggle(courseId, true)}
        className="btn btn-danger"
      >
        Unenroll
      </button>
    ) : (
      <button
        onClick={() => handleEnrollToggle(courseId, false)}
        className="btn btn-success"
      >
        Enroll
      </button>
    );
  };

  const renderFacultyControls = () => (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">New Course</h5>
        <div>
          <button
            className="btn btn-warning"
            id="wd-update-course-click"
            onClick={updateCourse}
            disabled={course._id === "0"}
          >
            Update
          </button>
          <button
            className="btn btn-primary ms-2"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
        </div>
      </div>
      <hr />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        placeholder="Course Name"
      />
      <textarea
        value={course.description}
        className="form-control mb-2"
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        placeholder="Course Description"
      />
    </>
  );

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          Published Courses ({(showEnrollments ? courses : userCourses).length})
        </h2>
        {currentUser?.role === "STUDENT" && (
          <button className="btn btn-primary" onClick={toggleShowAllCourses}>
            {showEnrollments ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        )}
      </div>

      <hr />

      {currentUser?.role === "FACULTY" && renderFacultyControls()}

      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showEnrollments ? courses : userCourses).map((courseItem) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser?._id &&
                enrollment.course === courseItem._id
            );
            return (
              <div key={courseItem._id} className="col" style={{ width: "300px" }}>
                <div className="card h-100">
                  <Link
                    to={`/Kanbas/Courses/${courseItem._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={courseItem.image || "/images/reactjs.jpg"}
                      width="100%"
                      height="160"
                      alt="Course Thumbnail"
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5
                      className="wd-dashboard-course-title card-title"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {courseItem.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-description card-text text-muted"
                      style={{
                        fontSize: "0.9em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        maxHeight: "4.5em",
                      }}
                    >
                      {courseItem.description}
                    </p>
                    <div className="mt-auto d-flex justify-content-between">
                      <Link
                        to={`/Kanbas/Courses/${courseItem._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                      {currentUser?.role === "FACULTY" ? (
                        <div>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(courseItem);
                            }}
                            className="btn btn-warning me-2"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(courseItem._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        currentUser?.role === "STUDENT" &&
                        renderEnrollmentButton(courseItem._id, isEnrolled)
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

