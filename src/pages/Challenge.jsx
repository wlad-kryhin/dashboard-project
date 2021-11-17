import styled from "styled-components";

const List = styled.ol`
  list-style: normal;
  padding: 50px 0;
`;
const ListItems = styled.li`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
export const Challenge = () => {
  return (
    <List>
      <ListItems>
        Bobby Jo’s “Sweet” Platter features 8 pancakes and 4 waffles served with
        a giant milkshake. The pancakes and waffles are topped with 12 bacon
        rashers, blueberries, and maple syrup. Served with a banana milkshake,
        and there is a 20 minute time limit to finish everything.
      </ListItems>
      <ListItems>
        {" "}
        There are three big pies stacked on top of each other. They are filled
        with mashed potatoes, peas, cheese, shallots, and gravy. They are
        layered with more mashed potatoes and mushy peas. There is a 10-minute
        limit to finish the entire challenge meal.
      </ListItems>
      <ListItems>
        {" "}
        There are three big pies stacked on top of each other. They are filled
        with mashed potatoes, peas, cheese, shallots, and gravy. They are
        layered with more mashed potatoes and mushy peas. There is a 10-minute
        limit to finish the entire challenge meal.
      </ListItems>
      <ListItems>
        Everything is served in a pizza box with fries at the base. Topped with
        kebab meat, chicken tikka chunks, cheese, and your choice of BBQ, chili,
        burger, or garlic sauce. There is a 20-minute time limit to finish
        everything.
      </ListItems>
    </List>
  );
};
