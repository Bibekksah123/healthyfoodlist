import Container from './component/Container';
import Error from './component/error';
import Fooditem from './component/Fooditem';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  let foodslist=["Dal","Roti","Sag","Green vegistabel","Milk"];
  // if(foodslist.length==0){
  //   return <h2>i am waiting for food</h2>
  // }
  return (
    <>
  <Container>
 <Error item={foodslist}></Error>
   <h1>Healthy food</h1>
   <Fooditem item={foodslist}></Fooditem>
  
</Container>
<Container>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quisquam similique debitis quam ab, fuga minima nesciunt asperiores nisi impedit eligendi minus tempora blanditiis provident fugiat. Error doloribus adipisci nesciunt.</p>
</Container>
</>
  )
}

export default App;
