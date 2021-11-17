import { ImPrinter } from "react-icons/im";
import styled from "styled-components";

const Days = styled.div`
  font-size: 24px;
  text-align: center;
  width: 100%;
  padding: 10px;
  height: 10%;
  color: greenyellow;
  border-bottom: 0.5px solid rgba(5, 7, 6, 0.099);
`;

const BigColumn = styled.div`
  padding: 30px;
  height: 80%;
  font-weight: 700;
  position: relative;
`;
const BigColumnDesc = styled.span`
  position: absolute;
  color: lightgray;
  font-size: 40px;
  line-height: 40px;
  width: 500px;
  top: 127px;
  left: -184px;
  transform: rotate(-90deg);
`;
const Print = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 10%;
  background-color: rgba(4, 9, 28, 0.06);
`;
const PrintDesc = styled.span`
  margin-left: 5px;
`;
export const LastDayColumn = ({ day }) => {
  return (
    <>
      <Days>DAY {day} </Days>
      <BigColumn>
        <BigColumnDesc>GLUTEN FREE DAY</BigColumnDesc>
      </BigColumn>
      <Print>
        <ImPrinter /> <PrintDesc>Print</PrintDesc>
      </Print>
    </>
  );
};
