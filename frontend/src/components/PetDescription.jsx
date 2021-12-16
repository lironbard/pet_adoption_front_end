import React, { useEffect, useState } from "react";
import { getPetsById, likePet, unlikePet, adoptPet, returnPet } from "../../lib/api";
import { useAuth } from "../../context/auth";

function PetDescription(props) {
  const [petData, setPetData] = useState({});
  const [likedPets, setLikedPets] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [fosteredPets, setFosteredPets] = useState([]);
  const petId = props.match.params.petId;
  const auth = useAuth();

  useEffect(async () => {
    const petData = await getPetsById(petId);
    setPetData(petData);
  }, []);

  useEffect(() => {
    setLikedPets([]);
    setLikedPets(auth.likedPets);
  }, [auth.likedPets]);
  useEffect(() => {
    setFosteredPets([]);
    setFosteredPets(auth.fosteredPets);
  }, [auth.fosteredPets]);
  useEffect(() => {
    setAdoptedPets([]);
    setAdoptedPets(auth.adoptedPets);
  }, [auth.adoptedPets]);

  async function handleLikePet() {
    if (checkLikedPet(petId)) {
      const data = await unlikePet(petId, auth.userId);
      auth.saveLikedPet(data);
    } else {
      const data = await likePet(petId, auth.userId);
      auth.saveLikedPet(data);
    }
  }

  async function handleAdoption(adoptionStatus) {
    adoptPet(petId, auth.userId, auth.token, adoptionStatus).then((data) => {
      if (data && data.isSuccessful) {
        if (adoptionStatus === "Adopted") {
          auth.saveAdoptedPet(data.updatedUser.adoptedPets);
        } else {
          auth.saveFosteredPet(data.updatedUser.fosterdPets);
        }
      }
    });
  }

  async function handleReturnPet() {
    returnPet(petId, auth.userId, auth.token).then((data) => {
      if (data.data && data.data.isSuccessful) {
        setAdoptedPets([]);
        setFosteredPets([]);
        auth.saveAdoptedPet(data.data.updatedUser.adoptedPets);
        auth.saveFosteredPet(data.data.updatedUser.fosterdPets);
      }
    });
  }

  function checkLikedPet(petId) {
    return likedPets.includes(petId);
  }
  function checkAdoptedPet(petId) {
    return adoptedPets.includes(petId);
  }
  function checkFosteredPet(petId) {
    return fosteredPets.includes(petId);
  }

  return (
    <div className="container d-flex p-3">
      <div className="col-10 bg-light rounded">
        <img className="w-50 rounded mx-auto d-block mt-5 mb-2" src={petData.picture} alt="" />
        <div className="d-flex justify-content-center mb-4">
          <div className="text-start">
            <div>
              Type: <span>{petData.type}</span>
            </div>
            <div>
              Name: <span>{petData.name}</span>
            </div>
            <div>
              Adoption Status: <span>{petData.adoptionStatus}</span>
            </div>
            <div>
              Height: <span>{petData.height} cm</span>
            </div>
            <div>
              Weight: <span>{petData.weight} Kg</span>
            </div>
          </div>
          <div className="m-5"></div>
          <div className="text-end">
            <div>
              Color: <span>{petData.color}</span>
            </div>
            <div>
              Bio: <span>{petData.bio}</span>
            </div>
            <div>
              Hypoallergenic: <span>{petData.hypoallerganic}</span>
            </div>
            <div>
              dietary restrictions: <span>{petData.dietaryRestrictions}</span>
            </div>
            <div>
              breed of animal: <span>{petData.breed}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block">
        {auth.isLoggedIn ? (
          <div style={{ width: "110%" }} className="btn-group-vertical" role="group">
            {checkFosteredPet(petId) || checkAdoptedPet(petId) ? (
              <button onClick={handleReturnPet} type="button" className="btn btn-primary m-1 ms-3">
                Return pet :(
              </button>
            ) : (
              <>
                <button onClick={() => handleAdoption("Adopted")} type="button" className="btn btn-primary m-1 ms-3">
                  Adopt
                </button>
                <button onClick={() => handleAdoption("Fostered")} type="button" className="btn btn-primary m-1 ms-3">
                  Foster
                </button>
              </>
            )}
            {checkLikedPet(petId) ? (
              <button onClick={handleLikePet} type="button" className="btn btn-primary m-1 ms-3">
                disLike
              </button>
            ) : (
              <button onClick={handleLikePet} type="button" className="btn btn-primary m-1 ms-3">
                Like
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PetDescription;
