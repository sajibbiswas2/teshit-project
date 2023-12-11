import Hader from '../Hader/Hader';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;