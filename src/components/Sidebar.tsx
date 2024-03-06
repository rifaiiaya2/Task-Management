import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GrTasks, GrTask } from "react-icons/gr";
import { GoSidebarCollapse } from "react-icons/go";

function Sidebar() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
      <nav className={'navbar navbar-dark bg-dark flex-column w-100 p-3'}>
        <ul className="navbar-nav">
          <li className="nav-item mb-4">
            <ScrollLink
              to="sidebar"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"

            >
              <GoSidebarCollapse className="me-2 ms-2" />
              Sidebar
            </ScrollLink>
          </li>
          <li className="nav-item mb-4">
            <NavLink to="/" className="nav-link" >
              <MdDashboard className="me-2  ms-2" />
              Dashboard
            </NavLink>

          </li>

          <li className="nav-item mb-4">
            <NavLink to="/active" className="nav-link" >
              <GrTasks className="me-2  ms-2" />
              Active Tasks
            </NavLink>

          </li>
          <li className="nav-item mb-4">
            <NavLink to="/complete" className="nav-link" >
              <GrTask className="me-2  ms-2" />
              Completed Tasks
            </NavLink>

          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Sidebar