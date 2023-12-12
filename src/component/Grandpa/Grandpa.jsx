import { createContext, useState } from "react";
import Ancule from "../Ancule/Ancule";
import Ante from "../Ante/Ante";
import Father from "../Father/Father";
import './Granpa.css';
export const RingContext = createContext('gold');
export const MeanyContext = createContext(0);
const Grandpa = () => {
    const [many, setMany] = useState(0)
    const ring = "Diamond";
    return (

        <div className="grandpa">
            <p>Grandpa</p>
            <p>has many:{many}</p>
            <MeanyContext.Provider value={[many,setMany]}>
                <RingContext.Provider value="goldn rink">
                    <section className="flex">
                        <Father ring={ring}></Father>
                        <Ancule></Ancule>
                        <Ante ring={ring}></Ante>
                    </section>
                </RingContext.Provider>
            </MeanyContext.Provider>

        </div>
    );
};

export default Grandpa;


/*
 *create a context and export
 * create a provider &pass a value
 * use context receive the value
*/