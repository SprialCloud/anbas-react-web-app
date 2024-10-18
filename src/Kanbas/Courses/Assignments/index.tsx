import AssignmentControls from "./AssignmentControls";
import GreenCheckmark from "./GreenCheckMark";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import "./style.css";
import { Link, useParams} from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

    return (
      <div id="wd-assignments">
        <AssignmentControls/> <br/> <br/> <br/><br/>
        <ul id="wd-assignment-list" className="list-group rounded-0 border">
          <li className="wd-assignment-list-item list-group-item p-0  fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light">
          <BsGripVertical className="me-2 fs-3" /> 
          <RxTriangleDown/>
          <strong>Assignment</strong>
          <IoEllipsisVertical className="float-end"/>
          <FaPlus className="float-end me-3 fs-5" />
          <span className="float-end border rounded-pill ps-3 pe-3 me-2">40% of Total</span>
          </div>
          </li>
          {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
          <li className="wd-assignment-list-item d-flex align-items-center green-left-border">
            <div className="me-3">
              <BsGripVertical className="me-2 fs-3" />
              <LuNewspaper className="fs-5" />
            </div>
            <div className="flex-grow-1">
              <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-black">
                <strong>{assignment.title}</strong>
              </Link>
              <ul className="list-unstyled mb-0">
                <li>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.available}
                </li>
                <li><strong>Due</strong> {assignment.due} | {assignment.points} pts</li>
              </ul>
            </div>
            <div className="float-end">
              <GreenCheckmark />
              <IoEllipsisVertical className="fs-4" />
            </div> 
          </li>
          ))}
        </ul>
      </div>
    );
}