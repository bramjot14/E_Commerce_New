// Option 1: Using the props object

{/* <AddtoCart id={product.id} name={product.name} price={product.price} /> */}
function AddtoCart(props) {
    return (
      <div>
        <p>id: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
      </div>
    );
  }
  
  export default AddtoCart;