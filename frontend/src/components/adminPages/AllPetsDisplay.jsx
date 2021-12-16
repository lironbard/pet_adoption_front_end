import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPets } from "../../lib/api";

function AllPetsDisplay() {
  const [allPets, setAllPets] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getPets();
      setAllPets(data);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <ul>
        {allPets.map((pet) => {
          return (
            <li>
              <Link to={`/pet/${pet._id}`}>{pet.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllPetsDisplay;
