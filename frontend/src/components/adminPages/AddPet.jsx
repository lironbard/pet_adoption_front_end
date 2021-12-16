import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { addNewPet, uploadPic } from "../../lib/api";
import { useAuth } from "../../context/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      margin: "6% -10% 6% 23%",
      display: "block",
    },
  },
}));

function AddPet() {
  let history = useHistory();
  const auth = useAuth();
  const classes = useStyles();
  const imageTypes = ".jpg,.png,jpeg,.gif,.svg";

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [picture, setPicture] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [hypoallergenic, setHypoallergenic] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [breed, setBreed] = useState("");

  async function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    uploadPic(auth.token, formData).then((data) => {
      if (data) {
        setPicture(data.pictureUrl);
      }
    });
  }

  async function handleSubmit(e) {
    // e.preventDefault();
    const pet = {
      type,
      name,
      adoptionStatus,
      picture,
      height,
      weight,
      color,
      bio,
      hypoallergenic,
      dietaryRestrictions,
      breed,
    };
    const data = await addNewPet(pet, auth.token);
    history.push("/dashboard");
  }

  return (
    <div className="container">
      <form
        style={{
          background: "#2981d92e",
          width: "90%",
          paddingRight: "10%",
          marginLeft: "5%",
        }}
        className="mt-3 d-flex justify-content-center"
        noValidate
        autoComplete="off"
      >
        <div className={classes.root}>
          <Input onChange={(e) => setType(e.target.value)} placeholder="Type" inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setName(e.target.value)} placeholder="Name" inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setAdoptionStatus(e.target.value)} placeholder="Adoption Status" inputProps={{ "aria-label": "description" }} />
          <Input placeholder="Picture" type="file" onChange={handleFile} inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setHeight(e.target.value)} placeholder="Height" inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setWeight(e.target.value)} placeholder="Weight" inputProps={{ "aria-label": "description" }} />
        </div>
        <div className={classes.root}>
          <Input onChange={(e) => setColor(e.target.value)} placeholder="Color" inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setBio(e.target.value)} placeholder="Bio" inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setHypoallergenic(!hypoallergenic)} placeholder="Hypoallergenic" inputProps={{ "aria-label": "description" }} type="checkbox" />
          <Input onChange={(e) => setDietaryRestrictions(e.target.value)} placeholder="Dietry Restrictions" inputProps={{ "aria-label": "description" }} />
          <Input onChange={(e) => setBreed(e.target.value)} placeholder="Breed" inputProps={{ "aria-label": "description" }} />
          <Button onClick={handleSubmit} variant="contained">
            Add Pet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddPet;
