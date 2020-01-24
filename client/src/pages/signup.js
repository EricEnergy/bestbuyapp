import React, { useState, useRef, useEffect} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


function loginField() {

  const passwordS = useRef();
  const usernameS = useRef();
  const passwordS1 = useRef();
  const usernameS1 = useRef();
  const [congrat, setCongrat] = useState()


  useEffect(() => {
  }, []);


  function setSignup(e) {
    e.preventDefault()
    var info = {
      email: usernameS1.current.value,

      password: passwordS1.current.value
    };
    API.createUser(info)
      .then(res =>
        console.log(res.data),
        setCongrat(<p>You have been signed up</p>)
      )
      .catch(err => console.log("error", err));
  };


  function letsLogIn(e) {
    e.preventDefault()
    var info = {
      email: usernameS.current.value,

      password: passwordS.current.value
    };

    console.log(info)
    API.logUserIn(info)
      .then(res => {
        console.log(res.data);
        let token = res.data.token;
        document.cookie = `{usertoken : ${token}}`
        setCongrat(<p>You have been Logged in</p>)
      }
      )
      .catch(err => console.log("error", err));
  };




  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              Sign in here              </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
      <div className="col-md-2"></div>

        <div className="col-md-3 bg-white text-center ">

          <h1>Sign Up</h1>
          <form >
            <input id="signUpuserEmail" name="email" type="email2" ref={usernameS1} />
            <label htmlFor="emailbar">Email</label><br></br>

            <input id="signUpuserPass" name="password" type="password2" ref={passwordS1} />
            <label htmlFor="searchBar">password</label><br></br>

            <button className="btn btn-primary" style={{ marginLeft: "20px" }} type="submit" onClick={(e) => setSignup(e)}>Create</button>
          </form>
          {congrat}
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3 bg-white text-center">
          <h1>Log in </h1>

          <form >
            <input id="loguser" name="emailbar" type="email1" ref={usernameS} />
            <label htmlFor="emailbar"> Email </label><br></br>

            <input id="logpass" name="searchBar" type="password1" ref={passwordS} />
            <label htmlFor="searchBar"> password </label><br></br>
            <button className="btn btn-primary" style={{ marginLeft: "20px" }} type="submit" onClick={(e) => letsLogIn(e)}>login</button>
          </form>
          {congrat}
        </div>
        <div className="col-md-2"></div>

      </Row>
    </Container>
  );
}


export default loginField;
