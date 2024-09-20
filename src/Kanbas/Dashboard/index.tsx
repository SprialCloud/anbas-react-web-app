import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className = "wd-dashboard-course-link"
                to="/Kanbas/Courses/1235/Home">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <h5>
                 CS1235 Node JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1236/Home">
                <img src="/images/SQL.jpg" width={200} />
                <div>
                <h5>
                     CS1236 SQL
                </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1237/Home">
                <img src="/images/Algorithm.jpg" width={200} />
                <div>
                <h5>
                     CS1237 Algorithm
                </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1238/Home">
                <img src="/images/c++.jpg" width={200} />
                <div>
                <h5>
                     CS1238 C++
                </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1239/Home">
                <img src="/images/python.jpg" width={200} />
                <div>
                <h5>
                     CS1239 python
                </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1230/Home">
                <img src="/images/java.jpg" width={200} />
                <div>
                <h5>
                     CS1230 Java
                </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
