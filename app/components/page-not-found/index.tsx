import { useNavigate } from "@remix-run/react";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const handlePrevious = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-xl flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="flex">
          <div className="flex bg-base-300 rounded-badge px-5 py-1">
            Page not found
          </div>
        </div>
        <h1 className="p-0 bg">Oh No! Error 404</h1>
      </div>
      <blockquote>Please ensure that you enter your URL correctly.</blockquote>
      <div className="flex gap-5">
        <button
          onClick={handleNavigate}
          type="submit"
          className="btn btn-primary"
        >
          Back to home
        </button>
        <button onClick={handlePrevious} type="submit" className="btn">
          Go back to previous page
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
