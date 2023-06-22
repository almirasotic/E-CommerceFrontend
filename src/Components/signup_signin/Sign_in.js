import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TokenContext, token } from "../../index";

const Sign_in = () => {
  const { account, setAccount } = useContext(Logincontext);

  const { token, setToken } = useContext(TokenContext);

  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  // console.log(data);

  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
    // console.log(email);
    try {
      const res = await fetch("http://localhost:5007/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
        console.log(res);
        console.log("invalid details");
        toast.error("Pogresni podaci ili nalog nije aktiviran!", {
          position: "top-center",
        });
      } else {
        setAccount(data);
        setData({ ...logdata, email: "", password: "" });
        toast.success("Login Successfully done !", {
          position: "top-center",
        });
        const tokens = data.tokens;
        const token = tokens.at(-1);
        console.log("setting token", token.token);
        localStorage.setItem("token", token.token);
        setToken(token);
      }
    } catch (error) {
      console.log("login page ka error" + error.message);
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img
            src="https://blackrockcentre.ie/cms-admin/resources/dubraylogopic.jpg"
            alt="signupimg"
          />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={logdata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={logdata.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <button type="submit" className="signin_btn" onClick={senddata}>
              Continue
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <p>New to Dubray?</p>
          <button>
            {" "}
            <NavLink to="/signup">Create your Dubray Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sign_in;
