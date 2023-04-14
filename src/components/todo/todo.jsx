export const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return (
      <div data-tetsid={`todo-${id}`}>{text}</div>
  );
};
