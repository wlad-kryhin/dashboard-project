import styled from "styled-components";
import { UserProfile } from "./UserProfile";
const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid grey;
`;

const Navigation = styled.nav`
  padding: 40px 30px;
  height: 100%;
  border-left: 1px dashed grey;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
const NavigationLink = styled.a`
  color: grey;
  font-size: 25px;
  font-weight: 400;
  line-height: 16px;
  padding: 10px 5px;
  &:hover,
  &:focus {
    color: orange;
  }
  &:active {
    color: orange;
    border-bottom: 1px solid orange;
  }
`;

export const NavBar = () => {
  return (
    <Header>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavigationLink href="">Dashboard</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="">Recipes</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="">Challenge</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <UserProfile />
    </Header>
  );
};
