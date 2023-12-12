import { useContext } from "react";
import { MeanyContext } from "../Grandpa/Grandpa";


const Friend = ({ ring }) => {
    const [many] = useContext(MeanyContext);

    return (
        <div>
            <h2>Friend</h2>
            <p>ring:{ring}</p>
            <p>many:{many}</p>
        </div>
    );
};

export default Friend;