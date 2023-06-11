const Cart = () => {
  const cartItems = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="flex flex-col items-center gap-4 my-4">
        <p className="text-2xl">Carrito de Compra</p>
      </div>
      <div className="grid grid-cols-1 my-4 max-w-fit mx-4 gap-3 float-right">
        {cartItems.map((item) => (
          <div className="justify-between py-3 border rounded-md min-w-min flex gap-3 items-center px-4">
            <div className="flex flex-col">
              <p className="text-2xl">Taza de 6 Oz</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <input
              className="border py-2 px-2 border-slate-400 rounded-md"
              type="number"
              defaultValue={1}
              min={1}
              max={5}
            />
            <p className="text-slate-500 font-thin">$ 12</p>
          </div>
        ))}
        <div className="justify-between py-3 border rounded-md min-w-min flex gap-3 items-center px-4 max-w-fit ml-auto">
          <p className="text-2xl">Subtotal</p>
          <p className="text-slate-500 font-thin">$ 12</p>
        </div>
        <button className="border py-3 px-2 rounded-md text-lg hover:border-blue-600 ">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
