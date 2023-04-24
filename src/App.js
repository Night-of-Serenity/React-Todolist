import "./App.scss";
import {
  FaHome,
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <header className="header">
        <span>
          <FaHome />
        </span>
        <h3>CC-Todolist</h3>
      </header>
      <aside className="sidebar">
        <section className="sidebar__general">
          <ul className="generic__lists">
            <li className="active">
              <span>
                <FaInbox />
              </span>
              <h6>Inbox</h6>
            </li>
            <li>
              <span>
                <FaCalendar />
              </span>
              <h6>Today</h6>
            </li>
            <li>
              <span>
                <FaCalendarAlt />
              </span>
              <h6>Next 7 Days</h6>
            </li>
          </ul>
        </section>
        <section className="sidebar__middle">
          <span>
            <FaChevronDown />
          </span>
          <h6>Projects</h6>
        </section>
        <section className="sidebar__projects">
          <ul className="project__lists">
            <li className="">
              <span>
                <FaInbox />
              </span>
              <h6>Projects-A</h6>
            </li>
            <li>
              <span>
                <FaCalendar />
              </span>
              <h6>Projects-B</h6>
            </li>
            {/* <li>
              <span>
                <FaCalendarAlt />
              </span>
              <h6>Next 7 Days</h6>
            </li> */}
          </ul>
        </section>
      </aside>
      <main className="content">Content</main>
    </div>
  );
}

export default App;
