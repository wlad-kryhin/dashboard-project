import "./dashboard.css";
import { List } from "./List";
import { LastDayColumn } from "./LastDayColumn";
import { TimeColumn } from "./TimeColumn";
import { ListItem } from "./ListItem";
import db from "../../database-foods.json";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Dashboard = () => {
  const [week, setWeek] = useState(1);
  const [data, setData] = useState(db);
  let newDay = 0;
  data.forEach((day) => {
    newDay = day.day + 1;
    return;
  });

  const increment = () => {
    if (week <= 3) {
      setWeek(week + 1);
      setData(
        data.map((day) => {
          const newDay = day.day + 7;
          day.day = newDay;
          return day;
        }),
      );
    }
  };
  const decrement = () => {
    if (week >= 2) {
      setWeek(week - 1);
      setData(
        data.map((day) => {
          const newDay = day.day - 7;
          day.day = newDay;
          return day;
        }),
      );
    }
  };

  const handleClick = (e) => {
    e.currentTarget.style.outline = "1px solid orange";
  };

  return (
    <>
      <div className="week-wrapper">
        <button type="button" onClick={decrement} className="week-button">
          <FiChevronLeft />
        </button>
        <p className="week-name">Week {week}</p>
        <button type="button" onClick={increment} className="week-button">
          <FiChevronRight />
        </button>
      </div>
      <div className="dashboard-wrapper">
        <List>
          <ListItem>
            <TimeColumn />
          </ListItem>
          {data.map(
            ({ day, breakfast, branch, lunch, dinner, supper, carb, id }) => {
              return (
                <li
                  key={id}
                  className="list-item"
                  onClick={handleClick}
                  id={id}
                >
                  <div className="days">DAY {day}</div>
                  <div className="center-table">{breakfast}</div>
                  <div className="center-table">{branch}</div>
                  <div className="center-table">{lunch}</div>
                  <div className="center-table">{dinner}</div>
                  <div className="center-table border-bottom-none">
                    {supper}
                  </div>
                  <div className="last">{carb}</div>
                  <div className="last border-top">SILNEY</div>
                </li>
              );
            },
          )}
          <ListItem>
            <LastDayColumn day={newDay} />
          </ListItem>
        </List>
      </div>
    </>
  );
};
