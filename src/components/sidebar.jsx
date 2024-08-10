import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h1>Schedule</h1>
        <div className="card">
          <h3>4 Aug, 2024</h3>
          <p>'Coke' found in CORE team members bags.</p>
        </div>
        <div className="card">
          <h3>6 Aug, 2024</h3>
          <p>Arni Verma got looted in front of school gate by 5 monkeys.</p>
        </div>
        <div className="card">
          <h3>7 Aug, 2024</h3>
          <p>CORE Event officially began!!!</p>
        </div>
        <div className="card">
          <h3>9 Aug, 2024</h3>
          <p>CORE team delayed surprise prompts by a whole 48 mins.</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <h1>Plannar</h1>
        <Calendar />
      </div>
    </div>
  );
}

export default Sidebar;
const Calendar = () => {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const tooltipDays = {
    14: "The Amaan Elahi's Birthday",
    17: "CORE 2K24",
    24: "PTM",
  };

  return (
    <div className="container">
      <h2>August 2024</h2>
      <div className="calendar">
        <div className="header">
          {daysOfWeek.map((day) => (
            <div key={day} className="days">
              {day}
            </div>
          ))}
        </div>
        <div className="body">
          {daysInMonth.map((day) => (
            <div key={day} className={`day ${tooltipDays[day] ? "tday" : ""}`}>
              {day}
              {tooltipDays[day] && (
                <div className="tooltip">{tooltipDays[day]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
