
 function Item({foodslist}){
  return (
    <li className="list-group-item">
       {foodslist}
       <button className=" btn btn-danger" onClick={()=>{
        console.log(`${foodslist}has been add to card`)
       }}>Buy</button>
       </li>
  )
}
export default Item;
