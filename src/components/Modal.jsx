const Modal = ({ item }) => {
  // console.log(item);
  return (
    <div>
      <div className="flex justify-between bg-yellow-50 rounded-lg p-3 my-5">
        <h2 className="font-medium">{item.name}</h2>
        <h2 className="font-medium text-green-500">${item.price}</h2>
      </div>
    </div>
  );
};

export default Modal;
