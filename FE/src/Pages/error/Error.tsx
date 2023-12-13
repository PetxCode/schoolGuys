import { Link, useLocation } from "react-router-dom";
import "./css/style.css";
import { FC, PropsWithChildren } from "react";

interface iError {
  error?: any;
  resetErrorBoundary?: any;
}
const ErrorComp: FC<iError> = ({ error }) => {
  const location = useLocation();

  return (
    <body>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404"></div>
          <h1>404</h1>
          <h2>Oops! Page Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
            <br />
            <br />
            <br />
            Error: {location.pathname} <br />
            Error: {error?.message}
          </p>
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </body>
  );
};

export default ErrorComp;
