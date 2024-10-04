import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import "./style.css";
import GreenCheckmark from "./GreenCheckMark";

export default function Assignments() {
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

          <li className="wd-assignment-list-item d-flex align-items-center green-left-border">
            <div className="me-3">
              <BsGripVertical className="me-2 fs-3" />
              <LuNewspaper className="fs-5" />
            </div>
            <div className="flex-grow-1">
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"
              style={{ color: 'black', 
                textDecoration: 'none'
              }} >
                <strong>A1</strong>
              </a>
              <ul className="list-unstyled mb-0">
                <li>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                </li>
                <li><strong>Due</strong> May 13 at 11:59pm | 100 pts</li>
              </ul>
            </div>
            <div className="float-end">
              <GreenCheckmark />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </li>

          <li className="wd-assignment-list-item d-flex align-items-center green-left-border ">
            <div className="me-3">
              <BsGripVertical className="me-2 fs-3" />
              <LuNewspaper className="fs-5" />
            </div>
            <div className="flex-grow-1">
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"
              style={{ color: 'black', 
                textDecoration: 'none'
              }} >
              
                <strong>A2</strong>
              </a>
              <ul className="list-unstyled mb-0">
                <li>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                </li>
                <li><strong>Due</strong> May 20 at 11:59pm | 100 pts</li>
              </ul>
            </div>
            <div className="float-end">
              <GreenCheckmark/>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </li>

          <li className="wd-assignment-list-item d-flex align-items-center green-left-border ">
            <div className="me-3">
              <BsGripVertical className="me-2 fs-3" />
              <LuNewspaper className="fs-5" />
            </div>
            <div className="flex-grow-1">
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"
              style={{ color: 'black', 
                textDecoration: 'none'
              }} >
                <strong>A3</strong>
              </a>
              <ul className="list-unstyled mb-0">
                <li>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                </li>
                <li><strong>Due</strong> May 27 at 11:59pm | 100 pts</li>
              </ul>
            </div>
            <div className="float-end">
              <GreenCheckmark />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </li>
        </ul>
      </div>
  );}
  