import React, { useState, useEffect } from "react";
import Pet from "../components/Pet";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const { data } = await axios.get("/api/pets");
      setPets(data);
    };
    fetchPets();
  }, []);

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
