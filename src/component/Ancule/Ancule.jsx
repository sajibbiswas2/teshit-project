import { useContext } from "react";
import Cusion from "../Cusion/Cusion";
import { MeanyContext } from "../Grandpa/Grandpa";


const Ancule = () => {
    const [many, setMany] =useContext(MeanyContext)
    return (
        <div>
            <h3>Ancul</h3>
            <p><small>grandpamanuy:{many}</small></p>
            <button onClick={()=>setMany(many+1000)}>send 1000K</button>
            <section className="flex">
                <Cusion>nabil</Cusion>
                <Cusion>nabila</Cusion>
            </section>
        </div>
    );
};

export default Ancule;