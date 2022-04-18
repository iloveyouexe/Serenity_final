import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameCreate = (e) => setName(e.target.value);
  const handleEmailCreate = (e) => setEmail(e.target.value);
  const handlePasswordCreate = (e) => setPassword(e.target.value);

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    fetch(`http://localhost:3000/api/users/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <div className="container text-center">
              <div className="row">
                  Users Page
              </div>
          </div> */}
      <div className="container d-flex justify-content-center">
        <div className="card mx-5 my-5">
          <div className="card-body px-2">
            <h2 className="card-heading px-3">Sign Up</h2>
            <h5 className="card-subheading px-3 pb-3">It's quick and easy.</h5>

            <form action="">
              <div className="row rone">
                <div className="form-group col-md-12 fone">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameCreate}
                  />{" "}

                </div>
              </div>
              <div className="row rtwo">
                <div className="form-group col-md-12 fthree">
                  {" "}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailCreate}
                  />{" "}
                  <small className="text-muted"></small>{" "}
                </div>
              </div>
              <div className="row rthree">
                <div className="form-group col-md-12 ffour">
                  {" "}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordCreate}
                  />{" "}
                </div>
                <small className="text-muted px-3">
                  <p className="para2 pl-3">
                    Use 8 or more characters with a mix of letters,numbers &
                    <br />
                    symbols
                  </p>
                </small>
              </div>
              <div className="row rfour">
                <div className="col-md-4 ml-3">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    onClick={createUser}
                  >
                    <span>Next step</span>
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;