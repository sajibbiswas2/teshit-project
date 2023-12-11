import { Link } from "react-router-dom";
import './Hader.css';
const Hader = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='review'>review</Link>
            <Link to='about'>About</Link>
            <Link to='connect'>Connect</Link>


        </nav>
    );
};

export default Hader;