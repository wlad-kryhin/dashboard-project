import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { LastDayColumn } from "./LastDayColumn";
import { TimeColumn } from "./TimeColumn";
import { ListItem } from "./ListItem";
import db from "../../database-foods.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColumnItem } from "./ColumnItem";
import { ProgressItem } from "./ProgressItem";
import { Dishes } from "./Dishes";

const List = styled.ul`
 max-width:600px
  height: 800px;
  margin: 50px 0;
  display: flex;
  -webkit-box-shadow: 0px 3px 38px -7px rgba(90, 91, 104, 0.3);
  -moz-box-shadow: 0px 3px 38px -7px rgba(90, 91, 104, 0.3);
  box-shadow: 0px 3px 38px -7px rgba(90, 91, 104, 0.3);
  @media screen and (min-width: 900px) {
    height: 600px;
    min-width: 800px;
    max-width: 1000px;
  }
`;
const WeekProgressWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WeekWrapper = styled(WeekProgressWrapper)`
  flex-direction: row;
  justify-content: center;
`;
const WeekButtonChange = styled.button`
  padding: 20px 10px;
  border: 1px solid burlywood;
  border-radius: 10px;
  background-color: transparent;
  &:focus,
  &:hover {
    background-color: orange;
    color: palegreen;
    border-color: green;
  }
`;

const WeekName = styled.p`
  font-size: 30px;
  margin: 0 30px;
`;
const ProgressList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DashboardWrapper = styled(WeekProgressWrapper)`
  justify-content: center;
  width: 100%;
`;

const arrayProgress = [
  { id: 1, bgColor: "orange", order: 1 },
  { id: 2, bgColor: "gray", order: 2 },
  { id: 3, bgColor: "gray", order: 3 },
  { id: 4, bgColor: "gray", order: 4 },
  { id: 5, bgColor: "gray", order: 5 },
  { id: 6, bgColor: "gray", order: 6 },
  { id: 7, bgColor: "gray", order: 7 },
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
        return { ...el, bgColor: "green" };
      }
      if (el.order === week) {
        return { ...el, bgColor: "orange" };
      } else {
        return { ...el, bgColor: "gray" };
      }
    });

    setProgress(newProgress);
  }, [week]);

  const increment = () => {
    if (week <= 3) {
      setWeek(week + 1);
      const newData = data.map((day) => {
        const newDay = day.day + 7;
        day.day = newDay;
        return day;
      });
      setData(newData);
    }
    if (week > 3) toast.warning("🦄 Oh no, what are you doing");
  };
  const decrement = () => {
    if (week >= 2) {
      setWeek(week - 1);
      const newData = data.map((day) => {
        const newDay = day.day - 7;
        day.day = newDay;
        return day;
      });
      setData(newData);
    }
    if (week < 2) toast.warning("🦄 Oh no, what are you doing");
  };

  return (
    <>
      <WeekProgressWrapper>
        <ProgressList>
          {progress.map((el) => {
            return <ProgressItem el={el} />;
          })}
        </ProgressList>
        <WeekWrapper>
          <WeekButtonChange type="button" onClick={decrement}>
            <FiChevronLeft />
          </WeekButtonChange>
          <WeekName>Week {week}</WeekName>
          <WeekButtonChange type="button" onClick={increment}>
            <FiChevronRight />
          </WeekButtonChange>
        </WeekWrapper>
        <Dishes />
      </WeekProgressWrapper>
      <DashboardWrapper>
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
      </DashboardWrapper>
    </>
  );
};
