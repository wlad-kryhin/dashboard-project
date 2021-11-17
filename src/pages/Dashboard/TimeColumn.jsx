import styled from "styled-components";

const Clock = styled.div`
  background-color: rgba(4, 9, 28, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MorningTime = styled(Clock)`
  padding: 80px 10px 10px 10px;
  height: 26%;
  border-bottom: 0.5px solid rgba(5, 7, 6, 0.099);
`;
const MiddleTime = styled(Clock)`
  padding: 10px;
  height: 16%;
  border-bottom: 0.5px solid rgba(5, 7, 6, 0.099);
`;

const Workout = styled(Clock)`
  padding: 5px;
  height: 5%;
  background-color: rgba(4, 9, 28, 0.06);
  border-top: 0.5px solid rgba(5, 7, 6, 0.099);
`;

const EveningTime = styled(Clock)`
  padding: 10px;
  height: 21%;
`;
const PM = styled.span`
  font-style: italic;
  color: lightgray;
`;
export const TimeColumn = () => {
  return (
    <>
      <MorningTime>
        6:00<PM>PM</PM>
      </MorningTime>
      <MiddleTime>
        9:00<PM>PM</PM>
      </MiddleTime>
      <MiddleTime>
        12:00<PM>PM</PM>
      </MiddleTime>
      <MiddleTime>
        3:00<PM>PM</PM>
      </MiddleTime>
      <EveningTime>
        6:00<PM>PM</PM>
      </EveningTime>
      <Workout>Workout</Workout>
    </>
  );
};
