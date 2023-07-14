import { Link, useLocation } from "react-router-dom";

export default function Error() {
    const location = useLocation();
    const isShopsPage = location.pathname === "/shops" || location.pathname === "/";

    return (
        <div className="error-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#e1bd3d">
                <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            <h2 className="error-header">Internal server error</h2>
            <div className="error-text">
                <p>Something went wrong at our end.</p>
                <p>Don't worry, it's not you - it's us. Sorry about that.</p>
            </div>
            {!isShopsPage && (
                <Link to="/shops" className="btn btn-light">
                    Return to Shops
                </Link>
            )}
        </div>
    );
}
