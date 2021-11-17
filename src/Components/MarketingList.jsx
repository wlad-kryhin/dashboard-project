import { HiChevronRight } from "react-icons/hi";
import styled from "styled-components";
import { DiApple, DiAndroid } from "react-icons/di";
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: baseline;
  }
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-bottom: 30px;
  @media screen and (min-width: 800px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 40px;
      border-right: 1px solid gray;
    }
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
  padding: 10px 20px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid grey;
  color: black;
  display: flex;

  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover,
  &:focus {
    color: white;
    background-color: grey;
    border: 1px solid orange;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ButtonDesc = styled.span`
  margin: 0 5px;
`;
export const MarketingList = () => {
  return (
    <List>
      <ListItem>
        <ListTitle>Running out the product?</ListTitle>
        <ListDescription>
          Peel the onion and roughly chop with the mushrooms.
        </ListDescription>
        <ListButton>
          <ButtonDesc>Buy now</ButtonDesc>
          <HiChevronRight />
        </ListButton>
      </ListItem>
      <ListItem>
        <ListTitle>Trainer your pocket</ListTitle>
        <ListDescription>
          Peel the onion and roughly chop with the mushrooms.
        </ListDescription>
        <ButtonWrapper>
          <ListButton>
            <DiApple />
            <ButtonDesc>IOS</ButtonDesc>
            <HiChevronRight />
          </ListButton>
          <ListButton>
            <DiAndroid />
            <ButtonDesc>Android</ButtonDesc>
            <HiChevronRight />
          </ListButton>
        </ButtonWrapper>
      </ListItem>
      <ListItem>
        <ListTitle>What do you want?</ListTitle>
        <ListDescription>
          {" "}
          Peel the onion and roughly chop with the mushrooms.
        </ListDescription>
        <ListButton>
          <ButtonDesc>ReadFaq</ButtonDesc>
          <HiChevronRight />
        </ListButton>
      </ListItem>
    </List>
  );
};
