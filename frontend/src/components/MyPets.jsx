import React, { useEffect, useState } from "react";
import { getUserById, getUserPets } from "../../lib/api";
import { useAuth } from "../../context/auth";
import PetCard from "../petCard/PetCard";

function MyPets() {
  const auth = useAuth();

  const [showLikedPets, setShowLikedPets] = useState(false);
  const [likedPets, setLikedPets] = useState([]);
  const [ownedPets, setOwnedPets] = useState([]);

  useEffect(() => {
    async function fetchUserPets() {
      const pets = await getUserPets(auth.userId, auth.token);
      setLikedPets(pets.likedPets);
      setOwnedPets(pets.ownedPets);
    }
    fetchUserPets();
  }, []);

  // useEffect(() => {
  // }, [showLikedPets]);

  return (
    <div className="text-center">
      <h2 className="display-3">My Pets</h2>
      <br />
      <div className="btn-group" role="group">
        <input onClick={() => setShowLikedPets(false)} value="myPets" type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" clicked={true} />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Pets
        </label>

        <input onClick={() => setShowLikedPets(true)} value="likedPets" type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Saved Pets
        </label>
      </div>
      <br />
      <br />
      <br />
      {showLikedPets ? (
        likedPets?.length ? (
          likedPets.map((pet, i) => {
            console.log(pet);
            return <PetCard key={i} petId={pet._id} petImage={pet.img} petName={pet.name} petStatus={pet.adoptionStatus} />;
          })
        ) : (
          <h3>You do not have any liked pets</h3>
        )
      ) : ownedPets?.length ? (
        ownedPets.map((pet, i) => {
          return <PetCard key={i} petId={pet._id} petImage={pet.img} petName={pet.name} petStatus={pet.adoptionStatus} />;
        })
      ) : (
        <h3>You do not own any pets</h3>
      )}
    </div>
  );
}

export default MyPets;
