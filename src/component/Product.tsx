import { Link } from "react-router-dom"

const Product = ()=> {

    return (        
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex justify-between">
                <Link to="/"><button className="m-1 border">products</button></Link>
                <Link to="/cart"><button className="m-1 border">cart</button></Link>
            </div>
            
        </div>
    )
}

export default Product