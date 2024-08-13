import Item from "./Item";

function Fooditem({item}){
  return (
    <ul className="list-group">
      {/* {foodslist.length !==0 && <h1>hello</h1>} */}
    {item.map((items)=>(
      <Item key={items} foodslist={items}></Item>
       ))}
    
   </ul>
  );
};
export default Fooditem;