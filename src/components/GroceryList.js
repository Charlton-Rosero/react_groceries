function GroceryList(props) {
   const data = props.groceryData
        return(
            <div>
            <p>item:  {data.item}</p>
            <p>brand: {data.brand}</p>
            <p>units: {data.units}</p>
            <p>quantity: {data.quantity}</p>
            <p>isPurchased: {data.isPurchased ? "yes": "no"}</p>
            </div>
    
      
        )
    }
    
    export default GroceryList