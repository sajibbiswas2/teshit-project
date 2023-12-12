import { useContext } from "react";
import { MeanyContext, RingContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const ring = useContext(RingContext)
    const [many,setMany]=useContext(MeanyContext)
    return (
        <div>
            <p>Brother</p>
            <small>{ring}</small>
            <p ><small> many{many}</small></p>
            <button onClick={()=>setMany(many*2)}>send </button>
          
        </div>
    );
};

export default Brother;