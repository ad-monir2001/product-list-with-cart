

const Cart = ({cart}) => {
    
    return (
        <div className="w-1/3 rounded-lg p-8 bg-slate-100 h-[40vh]">
            <h2 className="font-bold text-xl text-[#c0775f]">Your Cart{cart.length}</h2>
        </div>
    );
};

export default Cart;