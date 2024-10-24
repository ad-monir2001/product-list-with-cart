const Modal = ({ item,price }) => {
  // console.log(item);
  return (
    <div>
      <h1 className="font-bold text-3xl">Order Confirmed</h1>
      <p className="font-medium text-gray-500 text-sm">
        We hope you enjoy your food!
      </p>
      <div className="flex justify-evenly bg-yellow-50 rounded-lg p-3 my-5">
        {/* <img src={item.image} alt="" /> */}

        <h2 className="font-medium">{item.name}</h2>
        <h2 className="font-medium text-green-500">${item.price}</h2>
      </div>
      <hr />
      <div className="flex justify-between mx-4 my-6">
        <h1 className="font-medium text-gray-500">Order Total</h1>
        <h1 className="font-medium text-2xl text-green-500">${price}</h1>
      </div>
    </div>
  );
};

export default Modal;
