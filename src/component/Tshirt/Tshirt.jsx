
import './Tshirt.css'
const Tshirt = ({ teshirt, handealAddtoCart }) => {
    const { name, price, picture } = teshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>name:{name}</h4>
            <p>price:${price}</p>
            <button onClick={() => handealAddtoCart(teshirt)}>By naw</button>


        </div>
    );
};

export default Tshirt;