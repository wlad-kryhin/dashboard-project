import styled from "styled-components";

const ProgressItems = styled.li`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.bgColor || "gray"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const ProgressOrder = styled.span`
  color: white;
`;
export const ProgressItem = ({ el }) => {
  return (
    <ProgressItems bgColor={el.bgColor} key={el.id}>
      <ProgressOrder>{el.order}</ProgressOrder>
    </ProgressItems>
  );
};
