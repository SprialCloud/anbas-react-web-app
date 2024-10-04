import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">22:21:32</td> </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span></td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">11:24:36</td> </tr>
            <tr><td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">Bruce</span>{" "}
                <span className="wd-last-name">Banner</span></td>
                <td className="wd-login-id">001234563S</td>
                <td className="wd-section">S102</td>
                <td className="wd-role">STUDENT</td>
                <td className="wd-last-activity">2022-1-9</td>
                <td className="wd-total-activity">18:24:32</td> </tr>
            <tr><td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">Natasha</span>{" "}
                <span className="wd-last-name">Romanoff</span></td>
                <td className="wd-login-id">001234564S</td>
                <td className="wd-section">S104</td>
                <td className="wd-role">STUDENT</td>
                <td className="wd-last-activity">2020-11-01</td>
                <td className="wd-total-activity">10:51:22</td> </tr>
        </tbody>
      </table>
    </div> );}