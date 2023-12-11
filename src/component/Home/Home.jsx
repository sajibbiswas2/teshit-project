import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import './Home.css'
const Home = () => {
    const teshirts = useLoaderData();
    return (
        <div className="home-container">
            <div className="t-shirt-container">
                {
                    teshirts.map(teshirt => <Tshirt
                        key={teshirt._id}
                        teshirt={teshirt}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;

