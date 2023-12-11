import { useLoaderData } from "react-router-dom";

const Home = () => {
    const teshirts = useLoaderData();
    return (
        <div>
            <p>This is a home: {teshirts.length}</p>
        </div>
    );
};

export default Home;
