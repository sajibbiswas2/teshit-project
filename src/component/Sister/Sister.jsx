import { useContext } from "react";
import { MeanyContext } from "../Grandpa/Grandpa";


const Sister = () => {
    const [many]=useContext(MeanyContext)
    return (
        <div>
            <p>Sister</p>
            <p><small>many:{many}</small></p>
        </div>
    );
};

export default Sister;