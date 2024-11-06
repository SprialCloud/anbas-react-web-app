import {Link,  useParams, useNavigate} from "react-router-dom";
import { addAssignment, editAssignment } from "./reducer";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import ProtectedButton from "../../Account/ProtectedButton";
export default function AssignmentEditor() {
    const {cid, aid} = useParams();
    const assignment = useSelector((state: any) => state.assignmentReducer.assignments.find((a: any) => a.course ===cid &&a._id === aid));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState(assignment?.title || 'New Assignment');
    const [description, setDescription] = useState(assignment?.description || 'Add a description...');
    const [points, setPoints] = useState(assignment?.points || '100'); 
    const [available, setAvailable] = useState(assignment?.available || new Date().toISOString().slice(0, 16)); // Current date and time as default
    const [due, setDue] = useState(assignment?.due || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16));
    const cancelEdit = () => navigate(`/Kanbas/Courses/${cid}/Assignments`);

    const saveEdit = () => {
        const updatedAssignment = {
            _id: assignment?._id || new Date().getTime().toString(),
            course: cid,
            title,
            description,
            points,
            available,
            due,
        };
        dispatch(assignment ? editAssignment(updatedAssignment) : addAssignment(updatedAssignment));
        cancelEdit();
    };

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label> 
        <input id="wd-name" value={title} onChange = {(e) => setTitle(e.target.value)} className="form-control mb-2 border " style={{ maxWidth: '1000px' }}/>
        <textarea id="wd-description" cols  = {60} rows = {10} className="form-control mb-2" style={{ maxWidth: '1000px' }}
        value={description} onChange = {(e) => setDescription(e.target.value)}>
        </textarea>

        <div className="row mb-3 ">
            <label htmlFor="r1" className="col-sm-2 col-form-label text-end">
                Points </label>
            <div className="col-sm-10">
                <input  className="form-control" value = {points} onChange={(e) => setPoints(e.target.value)} id="r1" style={{ maxWidth: '400px' }}  />
            </div> </div>
        
        <div className="row mb-3">
            <label htmlFor="r1" className="col-sm-2 col-form-label text-end">
                Assignment Group </label>
            <div className="col-sm-10">
            <select id="wd-group" className="form-control form-select" style={{ maxWidth: '400px' }}>
                <option selected value="Assignments">Assignments</option>
                <option value="Quizzes">Quizzes</option>
                <option value="Exams">Exams</option>
                </select>
            </div> </div>

        <div className="row mb-3">
            <label htmlFor="r1" className="col-sm-2 col-form-label text-end">
                Display Grade as </label>
            <div className="col-sm-10">
            <select id="wd-group" className="form-control form-select" style={{ maxWidth: '400px' }}>
            <option selected value="Percentage">Percentage</option>
                <option value="Complete/Incomplete">Complete/Incomplete</option>
                <option value="Letter Grade">Letter Grade</option>
                </select>
            </div> </div>
        
        <div className="row mb-3">
            <label htmlFor="r1" className="col-sm-2 col-form-label text-end">
                Submission Type </label>
            <div className="col-sm-10 border p=3 form-control"style={{ maxWidth: '400px' }}>
            <select id="wd-group" className="form-control form-select"  style={{ maxWidth: '400px' }}>
            <option selected value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
                </select>
                <label className="form-label mb-3">

            <strong>Online Entry Options</strong>
          </label>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-text-entry"
              className="form-check-input"
            />
            <label htmlFor="wd-text-entry" className="form-check-label">
              Text Entry
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-website-url"
              className="form-check-input"
            />
            <label htmlFor="wd-website-url" className="form-check-label">
              Website URL
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-media-recordings"
              className="form-check-input"
            />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recording
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="form-check-input"
            />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotation
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="wd-file-upload"
              className="form-check-input"
            />
            <label htmlFor="wd-file-upload" className="form-check-label">
              File Upload
            </label>
          </div>
            </div> </div>

        <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-form-label col-sm-2 text-end">
          Assign
        </label>
        <div className="col-8 border p-3"style={{ maxWidth: '400px' }}>
          <div className="row">
            <div className="col-md-12 mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                <strong>Assign to</strong>
              </label>
            <div className="position-relative">
              <input
                id="wd-assign-to"
                className="form-control"
                placeholder="Everyone"
              />
              </div>
            </div>
            
            <div className="col-md-12 mb-3" style={{ maxWidth: '400px' }}>
              <label htmlFor="wd-due-date" className="form-label">
                <strong>Due</strong>
              </label>
              <input
                type="datetime"
                id="wd-due-date"
                className="form-control"
                value={due}
                onChange={(e) => setDue(e.target.value)}
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6" style={{ maxWidth: '400px' }}>
                <label htmlFor="wd-available-from" className="form-label">
                <strong>Available from</strong>
                </label>
                <input
                  type="datetime"
                  id="wd-available-from"
                  className="form-control"
                  value={available}
                  onChange={(e) => setAvailable(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-until" className="form-label">
                <strong>Until</strong>
                </label>
                <input
                  type="datetime"
                  id="wd-until"
                  className="form-control"
                  value = {due} 
                  onChange={(e) => setDue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-end">
      
        <button className="btn btn-secondary me-2" onClick={cancelEdit}>Cancel</button>
        <ProtectedButton>
        <button className="btn btn-danger" onClick={saveEdit}>Save</button>
        </ProtectedButton>
      </div>
      </div>
  );}
  