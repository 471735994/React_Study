interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{props.renderItem(item)}</li>
      ))}
    </ul>
  );
}

export const ListDemo = () => {
  return (
    <div>
      <List
        items={[1, 2, 3, 4, 5]}
        renderItem={(item) => <span>{item}</span>}
      />
    </div>
  );
};
