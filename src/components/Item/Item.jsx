const Item = props => {
  return (
    <div>
      <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {props.text}
      </a>
    </div>
  );
};

export default Item;
