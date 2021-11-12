export const ListItem = ({ children, data, onClick }) => {
  return (
    <li className="list-item" key={data} onClick={onClick}>
      {children}
    </li>
  );
};
