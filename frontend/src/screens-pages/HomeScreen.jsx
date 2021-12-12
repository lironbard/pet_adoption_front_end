import React from "react";
import Pet from "../components/Pet";
import pets from "../PetDataSet";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>Pets currently waiting for a new home:</h1>
      <Row>
        {pets.map((pet) => (
          <Col sm={12} md={6} lg={4}>
            <Pet pet={pet} />
            {/* <h3>{pet.name}</h3>
            <h4>{pet.type}</h4>
            <h5>{pet.breed}</h5> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
