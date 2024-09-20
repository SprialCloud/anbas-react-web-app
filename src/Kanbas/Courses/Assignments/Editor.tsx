export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label> <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols  = {60} rows = {10}>
          The assignment is available online Submit a link to the landing page of your web application.
        </textarea>
        <br /><br />
        <table>
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Groups</label>
                </td>
                <td>
                <select id="wd-group">
                <option selected value="Assignments">Assignments</option>
                <option value="Quizzes">Quizzes</option>
                <option value="Exams">Exams</option>
                </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-display">Display Grade as</label>
                </td>
                <td>
                <select id="wd-display">
                <option selected value="Percentage">Percentage</option>
                <option value="Complete/Incomplete">Complete/Incomplete</option>
                <option value="Letter Grade">Letter Grade</option>
                </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-submission">Submission Type</label>
                </td>
                <td>
                <select id="wd-submission">
                <option selected value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
                </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <label htmlFor="wd-entry">Online Entry Options</label>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <input type="checkbox" name="check-entry" id="wd-chkbox-text"/>
                <label htmlFor="wd-chkbox-text">Text Entry</label><br/>
                <input type="checkbox" name="check-entry" id="wd-chkbox-website"/>
                <label htmlFor="wd-chkbox-website">Website URL</label><br/>
                <input type="checkbox" name="check-entry" id="wd-chkbox-media"/>
                <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>
                <input type="checkbox" name="check-entry" id="wd-chkbox-annotation"/>
                <label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>
                <input type="checkbox" name="check-entry" id="wd-chkbox-file"/>
                <label htmlFor="wd-chkbox-file">File Uploads</label>
                </td>
            </tr>
            <br />
            <br />
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-assign">Assign</label>
                </td>
                <td>
                <label htmlFor="wd-assign-to">Assign to</label>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <input id = "wd-assign-to" value="Everyone" />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <label htmlFor="wd-due">Due</label>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <input id = "wd-due" type="date" value="2021-09-30" />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <label htmlFor="wd-available">Available from</label>
                </td>
                <td>
                <label htmlFor = "wd-until">Until</label>
                </td>
            </tr>
            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                <input id = "wd-available" type="date" value="2021-09-15" />
                </td>
                <td align = "left">
                <input id = "wd-until" type="date" value="2021-09-30" />
                </td>
            </tr>
            <br />
            <tr>
                <td colSpan={3}>   
                    <hr />
                </td>
            </tr>
            <tfoot>
                <tr>
                <td>
                </td>
                <td>
                </td>
                <td>
                <button id="wd-save">Save</button> <button id="wd-cancel">Cancel</button>
                </td>
                </tr>
            </tfoot>
        </table>
        <br />
        
      </div>
  );}
  