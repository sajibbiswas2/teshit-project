import Friend from "../Friend/Friend";


const Cusion = ({children,hasFrind}) => {
    return (
        <div>
            <p>cusin</p>
            {
                <p><small>{children}</small></p>
            }
            {hasFrind && <Friend></Friend>}
        </div>
    );
};

export default Cusion;