import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                CS1234.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1235/Home">
            <img src="/images/nodejs.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 Node JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
              CS1235.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1236/Home">
            <img src="/images/algorithm.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1236 Algorithm
              </h5>
              <p className="wd-dashboard-course-title card-text">
              CS1236.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1237/Home">
            <img src="/images/c++.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1237 C++
              </h5>
              <p className="wd-dashboard-course-title card-text">
              CS1237.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1238/Home">
            <img src="/images/java.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1238 Java
              </h5>
              <p className="wd-dashboard-course-title card-text">
              CS1238.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1239/Home">
            <img src="/images/python.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1239 Python
              </h5>
              <p className="wd-dashboard-course-title card-text">
              CS1239.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1230/Home">
            <img src="/images/SQL.jpg"  width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1230 SQL
              </h5>
              <p className="wd-dashboard-course-title card-text">
              CS1230.1.202410
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
