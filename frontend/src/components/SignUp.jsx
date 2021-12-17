import React, { useState } from "react";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [validPass, isValidPass] = useState(true);
  const [IsModalOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && repeatPassword && firstName && lastName && phone) {
      setIsOpen(!!IsModalOpen);
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address:
          </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" style={{ width: "50%" }} />
          <div id="emailHelp">We will never share your email with anyone.</div>
        </div>
        {/* ------------------------------ */}
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password:
          </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="inputPassword" aria-describedby="passwordHelp" style={{ width: "50%" }} />
          <div id="passwordHelp">We will never ask for your password outside this page.</div>
        </div>
        {/* ------------------------------ */}
        <div className="mb-3">
          <label htmlFor="repeatPassword" className="form-label">
            Please Type Your Password Again:
          </label>
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            type="password"
            className={`form-control ${validPass ? "" : "is-invalid"}`}
            id="repeatPassword"
            style={{ width: "50%" }}
          />
          {!validPass ? (
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              Passwords do not match.
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* ------------------------------ */}
        <div className="d-flex flex warp py-3">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control" id="firstName" />
          </div>
          &nbsp;
          <div className="col=5">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="lastName" />
          </div>
          <div className="col=5">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" className="form-control" id="phone" />
          </div>
        </div>
        {/* ------------------------------ */}
        <br />
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-success" type="submit" >
            Submit
          </button>
        </div>
        <hr />
        <button onClick={props.toggleModal} className="btn btn-outline-warning">
          Close
        </button>
      </form>
    </div>
  );
};

export default SignUp;
