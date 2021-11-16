import { ImPrinter } from "react-icons/im";
export const LastDayColumn = ({ day }) => {
  return (
    <>
      <div className="days">DAY {day} </div>
      <div className="big-column">
        <span className="big-column__desc">GLUTEN FREE DAY</span>
      </div>
      <div className="print">
        <ImPrinter /> <span className="print-desc">Print</span>
      </div>
    </>
  );
};
