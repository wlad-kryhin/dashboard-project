import { useState } from "react";
import { CenterTable } from "./CenterTable";
import { IoIosRestaurant } from "react-icons/io";
export const ColumnItem = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <li
      key={data.id}
      className={isClicked ? " list-item list-item__active" : "list-item"}
      onClick={() => setIsClicked(!isClicked)}
      id={data.id}
    >
      <div className={isClicked ? "days-active" : "days"}>DAY {data.day}</div>
      <CenterTable value={data.breakfast} classes={"center-table"} />
      <CenterTable value={data.branch} classes={"center-table"} />
      <CenterTable value={data.lunch} classes={"center-table"} />
      <CenterTable value={data.dinner} classes={"center-table"} />
      <CenterTable
        value={data.supper}
        classes={"center-table border-bottom-none"}
      />
      <div className="last">{data.carb}</div>
      <div className="last border-top">
        <IoIosRestaurant />
      </div>
    </li>
  );
};
