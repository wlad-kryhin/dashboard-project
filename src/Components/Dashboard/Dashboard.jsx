import "./dashboard.css";
import { List } from "./List";
import { LastDayColumn } from "./LastDayColumn";
import { TimeColumn } from "./TimeColumn";
import { ListItem } from "./ListItem";
import db from "../../database-foods.json";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const arrayProgress = [
  { id: 1, className: "progress__item", number: 1 },
  { id: 2, className: "progress__item", number: 2 },
  { id: 3, className: "progress__item", number: 3 },
  { id: 4, className: "progress__item", number: 4 },
];

export const Dashboard = () => {
  const [week, setWeek] = useState(1);
  const [data, setData] = useState(db);
  const [activeIdx, setActiveIdx] = useState(null);
  const [progress, setProgress] = useState(arrayProgress);
  const [isClicked, setIsClicked] = useState(true);

  let newDay = 0;
  data.forEach((day) => {
    newDay = day.day + 1;
    return;
  });

  useEffect(() => {
    const newProgress = progress.map((el) => {
      if (el.number < week) {
        return { ...el, className: "progress__item" };
      }
      if (el.number === week) {
        return { ...el, className: "progress__item-active" };
      } else {
        return { ...el, className: "progress__item-non-active" };
      }
    });
    console.log(newProgress);
    setProgress(newProgress);
  }, [week]);

  const click = (e, idx) => {
    console.log(e.target);
    if (e.target.nodeName !== "LI") {
      setActiveIdx(null);
    }
    setActiveIdx(idx);
  };

  const makeOptionsClassName = (index) => {
    const optionClasses = ["list-item"];
    if (index === activeIdx) {
      optionClasses.push("list-item__active");
    }
    return optionClasses.join(" ");
  };

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
      setActiveIdx(null);
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
      setActiveIdx(null);
    }
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
        <ul>
          {progress.map((el) => {
            return <li className={el.className} key={el.id}></li>;
          })}
        </ul>
        <List>
          <ListItem>
            <TimeColumn />
          </ListItem>

          {data.map(
            ({ day, breakfast, branch, lunch, dinner, supper, carb, id }) => {
              return (
                <li
                  key={id}
                  className={
                    isClicked ? "list-item" : " list-item list-item__active"
                  }
                  onClick={() => setIsClicked(!isClicked)}
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
