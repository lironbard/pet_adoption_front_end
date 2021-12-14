import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import PetCard from "../petCard/PetCard";
// import { getPets, getPetsByCriteria } from "../../lib/api";
import Pet from "../components/Pet";
import pets from "../PetDataSet";
import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
  centralize: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Search() {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const onClick = () => setAdvancedSearch(!advancedSearch);
  const [searchResults, setSearchResults] = useState([]);

  //   useEffect(() => {
  //     async function petsStore() {
  //       const data = await getPets();
  //       setSearchResults(data);
  //     }
  //     petsStore();
  //   }, []);

  //   const handleChange = async (e) => {
  //     e.preventDefault();
  //     if (!type) {
  //       const data = await getPets();
  //       setSearchResults(data);
  //     } else {
  //       const data = await getPetsByCriteria(type);
  //       setSearchResults(data);
  //     }
  //   };

  const handleChange = (e) => {
    console.log("Search Data");
  };

  return (
    <div className="col">
      <div className={classes.centralize}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Search By Budy Type</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={(e) => setType(e.target.value)}>
            <MenuItem value="">Any Type</MenuItem>
            <MenuItem value="Dog">Dog</MenuItem>
            <MenuItem value="Cat">Cat</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleChange} className={classes.button}>
          Search
        </Button>
        <br />
      </div>
      <div className={classes.centralize}>
        <Button className={classes.button} onClick={onClick}>
          Advanced Search
        </Button>
      </div>
      <div className={classes.centralize}>
        {advancedSearch ? (
          <form style={{ marginRight: "10%" }} className={classes.root} noValidate autoComplete="off">
            <Input onChange={(e) => setType(e.target.value)} style={{ width: "170%" }} placeholder="Search by type/status/height/weight/name" inputProps={{ "aria-label": "description" }} />
          </form>
        ) : null}
      </div>
      <br />
      <br />
      <br />
      <div className="container d-flex flex-wrap justify-content-between">
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
        {/* {searchResults ? (
          searchResults.map((pet) => {
            return <PetCard key={pet._id} petId={pet._id} petImage={pet.picture} petName={pet.name} petStatus={pet.adoptionStatus} />;
          })
        ) : (
          <h2>Loading</h2>
        )} */}
      </div>
    </div>
  );
}

export default Search;
