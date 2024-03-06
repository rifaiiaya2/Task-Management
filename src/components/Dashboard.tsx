import dashimg from "../assest/dashboard.jpg";
function Dashboard() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center px-2">
      <div className="container-lg">
        <div className=" row d-flex flex-lg-row flex-column text-center text-lg-start align-items-lg-center w-100 space-y-5">
          <div className="col-lg-6">
            <h1 className="display-5 pb-4 text-warning">
              Task Management Website </h1>
            <p className="fs-5 pt-4 text lh-lg font-monospace">
              Discover efficiency with our Task Management Dashboard.
              Seamlessly organize, create, and track your tasks in one
              intuitive interface.
              Elevate your productivity effortlessly!
            </p>
          </div>
          <div className="col-lg-6">
            <img src={dashimg} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
