import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import pets from "../PetDataSet";

const PetScreen = () => {
  const params = useParams();
  const pet = pets.find((p) => p.id === params.id);
  return (
    <>
      <div className="container">
        <Link className="btn btn-light rounded my-3" to="/">
          Go Back
        </Link>
        <div className="card text-center mb-4 m-2" style={{ width: "50rem" }}>
          <img src={pet.image} style={{ width: "100%", height: "50rem", borderRadius: "3px" }} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{pet.name}</h5>
            <div className="d-flex justify-content-between">
              <span className="card-text">{pet.adoptionStatus}</span>
              <div className="d-flex justify-content-center mb-4">
                <div className="text-start">
                  <div>
                    Type: <span>{pet.type}</span>
                  </div>
                  <div>
                    Name: <span>{pet.name}</span>
                  </div>
                  <div>
                    Adoption Status: <span>{pet.adoptionStatus}</span>
                  </div>
                  <div>
                    Height: <span>{pet.height} cm</span>
                  </div>
                  <div>
                    Weight: <span>{pet.weight} Kg</span>
                  </div>
                </div>
                <div className="m-5"></div>
                <div className="text-end">
                  <div>
                    Color: <span>{pet.color}</span>
                  </div>
                  <div>
                    Bio: <span>{pet.bio}</span>
                  </div>
                  <div>
                    Hypoallergenic: <span>{pet.hypoallerganic}</span>
                  </div>
                  <div>
                    dietary restrictions: <span>{pet.dietaryRestrictions}</span>
                  </div>
                  <div>
                    breed of animal: <span>{pet.breed}</span>
                  </div>
                </div>
              </div>
              <Link to={"/pet/" + pet.id}>
                <Link className="btn btn-primary" to="/">
                  Go Back
                </Link>
                <Link className="btn btn-primary" to="/">
                  Like / Favorites
                </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Col md={6}>
          <Image src={pet.image} alt={pet.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 text-variant="black">{pet.name}</h2>
            </ListGroup.Item>
          </ListGroup>
        </Col> */}
    </>
  );
};

export default PetScreen;
