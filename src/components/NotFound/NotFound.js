import { Link } from "react-router-dom";

function NotFound() {

    return (
        <main className="NotFound">
            <h4>Hey you seem lost.</h4>
            <p>This page doesn't exist.</p>
            <Link to="/">Go to start page</Link>
        </main>
    );

}

export default NotFound;