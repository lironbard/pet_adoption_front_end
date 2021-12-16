import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../lib/api";
import { useAuth } from "../../context/auth";

function AllUsersDisplay() {
  const auth = useAuth();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(async () => {
    const data = await getAllUsers(auth.token);
    setAllUsers(data);
  }, []);

  return (
    <div className="container">
      <ul>
        {allUsers.map((user) => {
          return (
            <li>
              <Link to={`/dashboard/user/${user._id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllUsersDisplay;
