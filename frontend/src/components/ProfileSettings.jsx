import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { getUserById, updateUserInfo } from "../../lib/api";

function ProfileSettings() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const userId = auth.userId;

  useEffect(() => {
    const userId = auth.userId;

    async function getUser() {
      const data = await getUserById(userId, auth.token);
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setPhone(data.phone);
      setBio(data.bio);
    }
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateUserInfo(auth.token, firstName, lastName, phone, email, password, userId);
      if (data) {
        alert("User updated successfully");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="container bg-light rounded w-50">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="changeEmail" className="form-label">
            Change email address
          </label>
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="email" className="form-control" aria-describedby="changeEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="changePassword" className="form-label">
            Change password
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changeFirstName" className="form-label">
            First name
          </label>
          <input onChange={(e) => setFirstName(e.target.value)} defaultValue={firstName} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changeLastName" className="form-label">
            Change last name
          </label>
          <input onChange={(e) => setLastName(e.target.value)} defaultValue={lastName} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changePhone" className="form-label">
            Change phone number
          </label>
          <input onChange={(e) => setPhone(e.target.value)} defaultValue={phone} type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="addBio" className="form-label">
            Add a short bio:
          </label>
          <input onChange={(e) => setBio(e.target.value)} defaultValue={bio} type="text" className="form-control" />
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
