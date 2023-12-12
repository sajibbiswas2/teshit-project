import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import './Home.css'
import { useState } from "react";
import toast from 'react-hot-toast';
const Home = () => {
    const teshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handealAddtoCart = teshirt => {
        const exist = cart.find(ts => ts._id === teshirt._id);
        if (exist) {
            toast('this t-shirt is alrady exiest');
        }
        else {
            const newCart = [...cart, teshirt]
            setCart(newCart);
        }
    }

    const handelRemovCard = id => {
        const reminingcart = cart.filter(ts => ts._id !== id);
        setCart(reminingcart);

    }
    return (
        <div className="home-container">
            <div className="t-shirt-container">
                {
                    teshirts.map(teshirt => <Tshirt
                        key={teshirt._id}
                        teshirt={teshirt}
                        handealAddtoCart={handealAddtoCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handelRemovCard={handelRemovCard}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;

