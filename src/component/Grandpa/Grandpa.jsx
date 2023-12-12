import Ancule from "../Ancule/Ancule";
import Ante from "../Ante/Ante";
import Father from "../Father/Father";
import './Granpa.css'
const Grandpa = () => {
    const ring = "Diamond";
    return (
    
        <div className="grandpa">
            <p>Grandpa</p>
            <section className="flex">
                <Father ring={ring}></Father>
                <Ancule></Ancule>
                <Ante></Ante>
            </section>
            
      </div>
    );
};

export default Grandpa;