import "./dashboard.css";
import { List } from "./List";
import { LastDayColumn } from "./LastDayColumn";
import { TimeColumn } from "./TimeColumn";
import { ListItem } from "./ListItem";
import db from "../../database-foods.json";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ColumnItem } from "./ColumnItem";
import { ProgressItem } from "./ProgressItem";

const arrayProgress = [
  { id: 1, className: "progress__item-active", order: 1 },
  { id: 2, className: "progress__item", order: 2 },
  { id: 3, className: "progress__item", order: 3 },
  { id: 4, className: "progress__item", order: 4 },
  { id: 5, className: "progress__item", order: 5 },
  { id: 6, className: "progress__item", order: 6 },
  { id: 7, className: "progress__item", order: 7 },
];

export const Dashboard = () => {
  const [week, setWeek] = useState(1);
  const [data, setData] = useState(db);
  const [progress, setProgress] = useState(arrayProgress);

  let newDay = 0;
  data.forEach((day) => {
    newDay = day.day + 1;
    return;
  });

  useEffect(() => {
    const newProgress = progress.map((el) => {
      if (el.order < week) {
        return { ...el, className: "progress__item" };
      }
      if (el.order === week) {
        return { ...el, className: "progress__item-active" };
      } else {
        return { ...el, className: "progress__item-non-active" };
      }
    });

    setProgress(newProgress);
  }, [week]);

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
      // setActiveIdx(null);
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
      // setActiveIdx(null);
    }
  };

  return (
    <>
      <div className="week-progress__wrapper">
        <ul className="progress-list">
          {progress.map((el) => {
            return <ProgressItem el={el} />;
          })}
        </ul>
        <div className="week-wrapper">
          <button type="button" onClick={decrement} className="week-button">
            <FiChevronLeft />
          </button>
          <p className="week-name">Week {week}</p>
          <button type="button" onClick={increment} className="week-button">
            <FiChevronRight />
          </button>
        </div>
        <ul className="dishes-list">
          <li className="dishes-list__item">1</li>
          <li className="dishes-list__item">2</li>
          <li className="dishes-list__item">3</li>
          <li className="dishes-list__item">4</li>
        </ul>
      </div>
      <div className="dashboard-wrapper">
        <List>
          <ListItem>
            <TimeColumn />
          </ListItem>

          {data.map((day) => {
            return <ColumnItem data={day} />;
          })}
          <ListItem>
            <LastDayColumn day={newDay} />
          </ListItem>
        </List>
      </div>
    </>
  );
};
