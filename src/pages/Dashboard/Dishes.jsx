import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { MdFastfood, MdLocalPizza } from "react-icons/md";
import { useState } from "react";

const DishesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DishesItems = styled.li`
  width: 25px;
  height: 25px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Dishes = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <DishesList>
      <DishesItems onClick={() => setIsActive(!isActive)}>
        {isActive ? <FaHamburger color="orange" /> : <FaHamburger />}
      </DishesItems>
      <DishesItems onClick={() => setIsActive(!isActive)}>
        {isActive ? <MdFastfood color="orange" /> : <MdFastfood />}
      </DishesItems>
      <DishesItems onClick={() => setIsActive(!isActive)}>
        {isActive ? <MdLocalPizza color="orange" /> : <MdLocalPizza />}
      </DishesItems>
    </DishesList>
  );
};
