import { useState } from "react";

export const ColumnItem = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <li
      key={data.id}
      className={isClicked ? " list-item list-item__active" : "list-item"}
      onClick={() => setIsClicked(!isClicked)}
      id={data.id}
    >
      <div className="days">DAY {data.day}</div>
      <div className="center-table">{data.breakfast}</div>
      <div className="center-table">{data.branch}</div>
      <div className="center-table">{data.lunch}</div>
      <div className="center-table">{data.dinner}</div>
      <div className="center-table border-bottom-none">{data.supper}</div>
      <div className="last">{data.carb}</div>
      <div className="last border-top">SILNEY</div>
    </li>
  );
};
