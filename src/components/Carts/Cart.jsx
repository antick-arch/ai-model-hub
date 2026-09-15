

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const handleCheckOut = () => {
    alert("Check Out Successfull");
    setCart([]);
  };
  const handleRemove = () =>{
    console.log("Buttor Clicked");
  }
  console.log(totalPrice);
  return (
    <div className="container mx-auto space-y-3 p-5">
      {cart.map((item) => (
        <div key={item.id}>
          <div className="bg-gray-100 rounded-2xl flex justify-between">
            <div className="flex-none">
              <img src={item.image} alt={item.title} className="w-30 p-3" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="flex flex-col justify-center p-3 mx-2">
              <h2 className="text-xl font-bold">${item.price}</h2>
              <p>Per Month</p>
            </div>
            
            <div className="flex justify-center items-center p-5">
              <button onClick={handleRemove} className="btn btn-error">Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between item-center bg-black text-white p-5 mt-5">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">Total</h2>
        </div>
        <div>
          <h2 className="text-xl font-bold">${totalPrice}</h2>
          <p className="">Per Month</p>
        </div>
      </div>
          <button onClick={handleCheckOut} className="btn btn-primary w-full">Check Out</button>
    </div>
  );
};

export default Cart;
