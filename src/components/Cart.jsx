import Item from './Item';
import Modal from './Modal';

const Cart = ({ cart, price }) => {
  return (
    <div className="w-1/3 rounded-lg p-8 bg-slate-100">
      <h2 className="font-bold text-xl text-[#c0775f]">
        Your Cart ({cart.length})
      </h2>
      <div>
        {cart.map((item, idx) => (
          <Item key={idx} item={item}></Item>
        ))}
      </div>

      <div className="flex items-center justify-between my-5 border-t-2">
        <h1 className="font-semibold text-base text-red-500">Order Total</h1>
        <h1 className="font-bold text-xl text-green-500">${price}</h1>
      </div>
      <h2 className="font-medium text-base bg-gray-400 rounded-lg p-2 text-white">
        This is a Carbon-neutral delivery.
      </h2>
      <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn text-white bg-red-500 rounded-full w-full my-8">
        Confirm Order
      </button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <div>
        {cart.map((item, idx) => (
          <Modal key={idx} item={item} price={price}></Modal>
        ))}
      </div>
          <div className="modal-action w-full">
            <form method="dialog w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-white bg-red-500 rounded-full my-8 ">Start New Order</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
