import styled from "styled-components";

const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  &:not(:first-child):not(:last-child) {
    border-right: 0.5px solid rgba(5, 7, 6, 0.099);
  }
  &:not(:first-child) {
    width: 14%;
  }
`;
export const ListItem = ({ children, data, onClick }) => {
  return (
    <ListItems key={data} onClick={onClick}>
      {children}
    </ListItems>
  );
};
