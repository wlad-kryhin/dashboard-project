export const ProgressItem = ({ el }) => {
  return (
    <li className={el.className} key={el.id}>
      <span className="progress__list-text">{el.order}</span>
    </li>
  );
};
