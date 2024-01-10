const ItemList = (props) => {
    const items = props.listItems
    // console.log(props.itemList);
  return (
    <div className="menu-list">
      {items?.card?.card?.itemCards?.map((item) => (
        <div key={item?.card?.info?.id}>
          <ul>
            <li>{item?.card?.info?.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
