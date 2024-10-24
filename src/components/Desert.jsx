const Desert = ({ desert,handleAddCart }) => {
  const { name, price, image, category } = desert;
  const { desktop, thumbnail } = image;
  return (
    <div className="space-y-3 border p-8 rounded-lg shadow-lg">
      <div className="space-y-2">
        <img src={desktop} alt="Desert" className="rounded-lg w-full" />
        <button onClick={()=>handleAddCart(desert)} className=" px-4 py-1 rounded-full text-lg font-semibold border-[#e78666] border bg-amber-50">
          Add to Cart
        </button>
      </div>
      <p className="font-medium text-gray-500 text-base">{category}</p>
      <h1 className="font-semibold text-lg">{name}</h1>
      <p className="text-[#E9967A] font-medium text-lg">${price}</p>
    </div>
  );
};

export default Desert;
