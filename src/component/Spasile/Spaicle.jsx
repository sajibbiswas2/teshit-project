import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Spaicle = () => {
    const angti = useContext(RingContext)
    return (
       
   <div>
            <h4>Spasile</h4>
            <p>Ring:{angti}</p>
        </div>
    );
};

export default Spaicle;