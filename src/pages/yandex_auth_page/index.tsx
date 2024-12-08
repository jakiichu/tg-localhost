import {useEffect} from "react";

const AutoRedirectPage = () => {

    useEffect(() => {
        window.location.href = `http://localhost:5173/${window.location.search}`
    }, []);

    return (
        <div/>
    );
};

export default AutoRedirectPage;
