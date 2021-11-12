export const List = ({ children, onClick }) => {
  return (
    <ul className="list" onClick={onClick}>
      {children}
    </ul>
  );
};
