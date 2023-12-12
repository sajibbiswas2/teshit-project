import './cart.css'
const Cart = ({ cart, handelRemovCard }) => {
    let message;
    if (cart.length == 0) {
        message = <p> please add to product </p>
    }
    else {
        message = <div>
            <h4>this is a boroloks</h4>
            <p>thank you payment your many</p>
        </div>
    }
    return (
        <div>
            <p className={cart.length === 1 ? 'blue' : 'red'}
            >This is a cart :{cart.length}</p>
            {message}
            {
                cart.map(teshirt =>
                    <p key={teshirt._id} >
                        {teshirt.name}
                        <button onClick={() => handelRemovCard(teshirt._id)}>x</button>
                    </p>)

            }
            {
                cart.length == 2 && <p>dabol product cart </p>
            }

            {
                cart.length == 5 && <p> shipping charge Free 100%</p>
            }
        </div>
    );
};

export default Cart;