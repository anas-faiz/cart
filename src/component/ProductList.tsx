import { products } from "../utils/products";

const ProductList = () => {
  const items = products;

  return (
    <div>
      {items.map((i) => (
        <div key={i.id} className="flex justify-between border m-1 bg-blue-500 p-1 m-1">
          <div>
            <p>{i.name}</p>
            <p>{i.price}</p>
            <p>{i.category}</p>
          </div>
          <button className="border bg-amber-300 p-1">add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
