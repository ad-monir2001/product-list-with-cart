

const Item = ({item}) => {

    const {name,price} = item;
    return (
        <div className="flex justify-between items-center space-y-4">
            <p className="font-medium">{name}</p>
            <p className="font-medium text-green-500">${price}</p>
            <button className="btn bg-warning text-red-500 font-bold text-lg">Delete</button>
        </div>
    );
};

export default Item;