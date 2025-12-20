import { products } from "../utils/products"

const ProductList  = ()=> {
    const items = products
    return (
        <div>
        {
            items.map((i)=>(
                <div key={i.id} className="border m-1 bg-blue-500">
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                    <p>{i.category}</p>
                </div>
            ))
        }
        </div>
    )
}

export default ProductList