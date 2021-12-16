import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h2 className="text-center m-3">Welcome Admin</h2>
      <ul className="list-group col-lg-6">
        <Link to="/pet" className="list-group-item">
          Create new pet
        </Link>
        <Link to="/dashboard/allpets" className="list-group-item">
          Go To All Pets
        </Link>
        <Link to="/dashboard/allusers" className="list-group-item">
          Go To All Users
        </Link>
      </ul>
    </div>
  );
}

export default Dashboard;
