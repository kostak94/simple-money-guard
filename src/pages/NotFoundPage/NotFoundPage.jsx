import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button type="button">Homepage</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
