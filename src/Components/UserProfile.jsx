import { FcBusinesswoman } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 30px;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UserName = styled.p`
  color: orange;
  font-size: 18px;
  font-weight: 400;
  line-height: 12px;
  margin: 0 10px;
`;

export const UserProfile = () => {
  return (
    <Wrapper>
      <FcBusinesswoman size={20} />
      <UserName>Olivia Kwiatka</UserName>
      <IoIosArrowDown />
    </Wrapper>
  );
};
