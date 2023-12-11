
import './Tshirt.css'
const Tshirt = ({ teshirt }) => {
    const { name, price, picture } = teshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />

        </div>
    );
};

export default Tshirt;