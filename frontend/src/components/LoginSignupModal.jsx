import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Login from "./LogIn";
import SignUp from "./SignUp";

export default function LoginSignupModal(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Modal open={props.openModal ? props.openModal : false} onClose={props.toggleModal}>
      <div className="modal-wrapper">
        <div>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="LOGIN" />
              <Tab label="SIGNUP" />
            </Tabs>
          </AppBar>
          <Box hidden={value !== 1} p={3}>
            <SignUp></SignUp>
          </Box>
          <Box hidden={value !== 0} p={3}>
            <Login></Login>
          </Box>
        </div>
      </div>
    </Modal>
  );
}
