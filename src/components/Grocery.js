import { useState } from "react"
import GroceryList from "./GroceryList"

function Grocery() {
const list = [ {
    item: "Toothpaste",
    brand: "Colgate",
    units: "Tube",
    quantity: "1",
    isPurchased: true

}]
 const [items, setItem] = useState(list)



 const addItem = (event) => {
    console.log({item: event.target.value})
    this.setItem({item: event.target.value})

 }
 const addBrand = (event) => {
    console.log({brand: event.target.value})
    this.setItem({brand: event.target.value})

 }
 const addUnits = (event) => {
    console.log({units: event.target.value})
    this.setItem({units: event.target.value})
    return({units: event.target.value})
 }
 const addQuantity = (event) => {
    console.log({quantity: event.target.value})
    this.setItem({quantity: event.target.value})

 }
//  const setBoolean = (event) => {
//     this.setItem({isPurchased: event.target.value})

//  }

 const addButton = () =>{
    
     const newList = [...items, addUnits];
     console.log(newList)
     setItem(newList)

    
 }

    return(
        <div>
            <h1> Grocery List</h1>
           <div className="mainDisplay">
               
               <h3>item</h3>
               <input  type="text" onChange={addItem} value={list.value} ></input><br/>
               <h3>brand</h3>
               <input  type="text" onChange={addBrand} value={list.value} ></input><br/>
               <h3>Unit</h3>
               <input  type="text" onChange={addUnits} value={list.value} ></input><br/>
               <h3>Quantity</h3>
               <input  type="text" onChange={addQuantity} value={list.value} ></input><br/>
              
              
                <button onClick={addButton}> Add</button>
           </div>

        {
            items.map((groceryData, index) => {
                return(
               <div>
               <GroceryList groceryData={groceryData} key={index}/>
               </div>
            )
                })
        }
        </div>

  
    )
}

export default Grocery