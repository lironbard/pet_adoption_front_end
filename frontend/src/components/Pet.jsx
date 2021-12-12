import React from "react";
import { Card } from "react-bootstrap";

const Pet = ({ pet }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <a href={`/pets/${pet.id}`}>
          <h3>{pet.name}</h3>
          <h4>{pet.type}</h4>
          <h5>{pet.breed}</h5>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Pet;
