import { HiChevronRight } from "react-icons/hi";
import styled from "styled-components";
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  &:not(:last-child) {
    margin-right: 40px;
    border-right: 1px solid gray;
  }
`;

const ListTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  color: gray;
  margin-bottom: 20px;
  max-width: 200px;
`;
const ListDescription = styled.p`
  font-size: 18px;
  color: darkgray;
  line-height: 22px;
  margin-bottom: 20px;
  max-width: 250px;
`;
const ListButton = styled.button`
  padding: 8px 12px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid orange;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: grey;
    border: 1px dashed green;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const MarketingList = () => {
  return (
    <List>
      <ListItem>
        <ListTitle>Running out the product?</ListTitle>
        <ListDescription>
          I want to work in getResponse I want to work in getResponse
        </ListDescription>
        <ListButton>
          <span>to interview</span>
          <HiChevronRight />
        </ListButton>
      </ListItem>
      <ListItem>
        <ListTitle>What is your goal?</ListTitle>
        <ListDescription>
          I want to work in getResponse I want to work in getResponse
        </ListDescription>
        <ButtonWrapper>
          <ListButton>
            <span>to interview</span>
            <HiChevronRight />
          </ListButton>
          <ListButton>
            <span>to interview</span>
            <HiChevronRight />
          </ListButton>
        </ButtonWrapper>
      </ListItem>
      <ListItem>
        <ListTitle>What do you want?</ListTitle>
        <ListDescription>
          I want to work in getResponse I want to work in getResponse
        </ListDescription>
        <ListButton>
          <span>to interview</span>
          <HiChevronRight />
        </ListButton>
      </ListItem>
    </List>
  );
};
