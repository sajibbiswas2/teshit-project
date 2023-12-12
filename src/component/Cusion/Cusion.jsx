import Friend from "../Friend/Friend";


const Cusion = ({children,hasFrind,ring}) => {
    return (
        <div>
            <p>cusin</p>
            {
                <p><small>{children}</small></p>
            }
            {hasFrind && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusion;