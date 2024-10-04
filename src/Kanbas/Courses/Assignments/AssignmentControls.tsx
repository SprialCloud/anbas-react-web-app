import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
        <span className="border btn">
        <FaMagnifyingGlass/>
        <input type="text" id="wd-search-assignments" className="border-0"  placeholder="  Search..." />
        </span>
        </div>
    );}
