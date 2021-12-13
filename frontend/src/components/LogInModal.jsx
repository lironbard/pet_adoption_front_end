import React, { useState } from "react";
import Modal from "react-modal";
import SignUpModal from "../components/SignUpModal";

const LogInModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%,-50%)",
    },
  };

  const [IsModalOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleModal = (e) => {
    e.preventDefault();
    setIsOpen(!IsModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsOpen(!!IsModalOpen);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
        <div>
          Don't have av account?
          <button className="btn btn-link mb-2" onClick={toggleModal}>
            Sign up here
          </button>
        </div>
      </form>
      <Modal style={customStyles} isOpen={IsModalOpen}>
        <SignUpModal toggleModal={toggleModal} closeFirstModal={props.isOpen} />
      </Modal>
    </div>
  );
};

export default LogInModal;
