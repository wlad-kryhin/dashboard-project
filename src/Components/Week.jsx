import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export const Week = ({ getValue }) => {
  const [week, setWeek] = useState(7);

  const increment = () => {
    setWeek(week + 1);
    getValue("increment");
  };
  const decrement = () => {
    setWeek(week - 1);
    getValue("decrement");
  };
  return (
    <div className="week-wrapper">
      <button type="button" onClick={decrement} className="week-button">
        <FiChevronLeft />
      </button>
      <p className="week-name">Week {week}</p>
      <button type="button" onClick={increment} className="week-button">
        <FiChevronRight />
      </button>
    </div>
  );
};
