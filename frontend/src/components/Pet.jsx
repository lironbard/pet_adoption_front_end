import React from "react";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pet = ({ pet }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/pet/${pet.id}`}>
        <Card.Img src={pet.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/pet/${pet.id}`}>
          <h3>{pet.name}</h3>
          <h4>{pet.type}</h4>
          <h5>{pet.breed}</h5>
          <button className="btn btn-primary m-2">More Info</button>
        </Link>
        <button className="btn btn-success" disabled={pet.adoptionStatus === "Adopted"}>
          Adopt
        </button>
      </Card.Body>
    </Card>
  );
};

export default Pet;
