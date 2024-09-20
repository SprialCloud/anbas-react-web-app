export default function Modules() {
    return (
      <div>
        <button id="wd-collapse">Collapse All</button> <button id="wd-view">View Progress</button> <select id="wd-publish-all">
            <option>Publish All</option>
            <option>Unpublish All</option>
            <option>Save</option>
        </select> <button id="wd-add-module">+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Chapter 1</li>
                  <li className="wd-content-item">Chapter 2</li>
                </ul>
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Week 1 slides</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn about HTML</li>
                  <li className="wd-content-item">Learn about CSS</li>
                </ul>
                <span className="wd-title">Reading</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Chapter 3</li>
                  <li className="wd-content-item">Chapter 4</li>
                </ul>
                <span className="wd-title">Slides</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Week 2 slides</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  