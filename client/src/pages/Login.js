import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from ""../utils/mutations";
import "../styles/login.css";
import Auth from ""../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center imgepic">
      <div className="col-12 col-lg-8 mx-auto my-0">
        <div className="card">
          
          <div className="card-body align-items-center">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="align-items-center " onSubmit={handleFormSubmit}>
                <div class="container">
                  <div class="kpx_login">
                    <h3 class="kpx_authTitle">
                      Login or <a href="#">Sign up</a>
                    </h3>
                    <div class="row kpx_row-sm-offset-3">
                      <div class="">
                        <form
                          class="kpx_loginForm"
                          action=""
                          autocomplete="off"
                          method="POST"
                        >
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
