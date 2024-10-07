import React, { useState, useContext, } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Auth.module.css";
import { auth } from "../../Utility/FireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {Type} from "../../Utility/action.type"
import {ClipLoader} from "react-spinners"

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoding] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
 const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

 

// console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (e.target.name === "signin") {
      setLoding({...loding,signIn:true})
      try {
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER, // Ensure that Type is defined correctly
          user: userInfo.user,
        });
        setLoding({...loding,signIn:false})
        navigate(navStateData?.state?.redirect ||"/");

      } catch (err) {
        // console.error(err);
        // Set a user-friendly error message
        setError(err.message);
        setLoding({...loding,signUp:false})
      }
    } else {
      setLoding({...loding,signUp:true})
      try {
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER, // Ensure that Type is defined correctly
          user: userInfo.user,
        });
         navigate(navStateData?.state?.redirect || "/");
        setLoding({...loding,signUp:false})
      } catch (err) {
        // console.error(err);
        // Set a user-friendly error message
        setError(err.message);
        setLoding({...loding,signUp:false})
      }
    }
  };

  return (
    <>
      <section className={classes.login}>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
        <div className={classes.login__container}>
          <h1>Sign In</h1>
          {
            navStateData?.state?.msg && (<small
              style={{
                padding:"5px",
                textAlign:"center",
                color:"red",
                fontWeight:"bold",
              }}>
                {navStateData?.state?.msg}
            </small>)
}
        
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              name="signin"
              onClick={authHandler}
              className={classes.signInButton}
            >
              {loding.signIn ? (
                <ClipLoader color="#000" size={15}></ClipLoader>
              ) : (
                "sign In"
              )}
            </button>
          </form>
          {error && <p className={classes.error}>{error}</p>}
          <p>
            By Signing-in you agree to the AMAZON FAKE CLONE conditions of use.
            Please see our privacy notice, our cookies notice, and our
            interest-based ads notice.
          </p>
          <button
            type="button"
            name="signup"
            onClick={authHandler}
            className={classes.login__registorButton}
          >
            {loding.signUp ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Create your Amazon Account"
            )}
            
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </>
  );
}

export default Auth;
