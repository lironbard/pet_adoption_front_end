import React, { useEffect, useState } from "react";
import { getUserById, getUserPets } from "../../lib/api";
import { useAuth } from "../../context/auth";
import PetCard from "../petCard/PetCard";
function DisplayUser() {
  const auth = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [userPets, setUserPets] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      const userInfo = await getUserById(auth.userId, auth.token);
      setUserInfo(userInfo);
    }
    fetchUserInfo();
    async function fetchUserPets() {
      const pets = await getUserPets(auth.userId, auth.token);
      setUserPets(pets);
    }
    fetchUserPets();
  }, []);

  return (
    <div>
      <br />
      <br />
      <h2 className="display-5 text-center">User Info</h2>
      <div className="container text-center d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              {userInfo.firstName} {userInfo.lastName}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{userInfo.email}</h6>
            <p className="card-text">phone : {userInfo.phone}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2 className="display-5 text-center">User's Liked pets</h2>
      <div className="d-flex justify-content-evenly">
        {userPets ? (
          userPets.likedPets.map((pet) => {
            return <PetCard key={pet._id} petId={pet._id} petImage={pet.img} petName={pet.name} petStatus={pet.adoptionStatus} />;
          })
        ) : (
          <h4>loading</h4>
        )}
      </div>
      <br />
      <br />
      <h2 className="display-5 text-center">User's fostered and adopted pets</h2>
      <div className="d-flex justify-content-evenly">
        {userPets ? (
          userPets.ownedPets.map((pet) => {
            return <PetCard key={pet._id} petId={pet._id} petImage={pet.img} petName={pet.name} petStatus={pet.adoptionStatus} />;
          })
        ) : (
          <h4>loading</h4>
        )}
      </div>
    </div>
  );
}

export default DisplayUser;
