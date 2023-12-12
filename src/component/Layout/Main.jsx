import Hader from '../Hader/Hader';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;