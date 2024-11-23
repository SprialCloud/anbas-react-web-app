import AssignmentControls from "./AssignmentControls";
import GreenCheckmark from "./GreenCheckMark";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { FaTrash } from "react-icons/fa6";
import "./style.css";
import { Link, useParams} from "react-router-dom";
import { deleteAssignment, setAssignment}from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import ProtectedButton from "../../Account/ProtectedButton";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssigmentsForCourse(cid as string);
    dispatch(setAssignment(assignments));
    };
    useEffect(() => {
    fetchAssignments();
    }, []);
    
    const removeAssignment = async (assignmentId: string) => {
      await assignmentsClient.deleteAssignment(assignmentId);
      fetchAssignments();
  }

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

              {currentUser?.role === 'FACULTY' && (
                  <ProtectedButton>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this assignment?")) {
                          removeAssignment(assignment._id);
                        }
                      }}
                    >
                      <FaTrash />
                    </button>
                  </ProtectedButton>
                )}

            </div> 
          </li>
          ))}
        </ul> 
      </div>
    );
}