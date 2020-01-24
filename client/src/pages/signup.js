import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { compareSync } from "bcrypt-nodejs";
// import { compareSync } from 'bcrypt-nodejs';

function loginField() {

  const passwordS = useRef()
  const usernameS = useRef()



  useEffect(() => {
    // loadCart();
  }, []);

  
  // function loadCart(){
  //   API.grabCart()
  //   .then(res => setCart(res.data ))
  // };

  function setSignup(e){
    e.preventDefault()
    var info = {
      email:usernameS.current.value,
      
      password:passwordS.current.value
    };

    console.log(info)
    API.createUser(info)
      .then(res =>
        console.log(res.data),
      )
      .catch(err => console.log("error",err));
  };


  function letsLogIn(e){
    e.preventDefault()
    var info = {
      email:usernameS.current.value,
      
      password:passwordS.current.value
    };

    console.log(info)
    API.logUserIn(info)
      .then(res =>
        console.log(res.data),
      )
      .catch(err => console.log("error",err));
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
        <Row>
          <h1>Sigh Up </h1>
        <form >
        <input id="signUpuserEmail" name="emailbar" type="email1" ref={usernameS}  />
        <label htmlFor="emailbar"> Email </label>

        <input id="signUpuserPass" name="searchBar" type="password1" ref={passwordS} />
        <label htmlFor="searchBar"> password </label>

        <button className="btn btn-primary" style={{ marginLeft: "20px" }} type="submit" onClick={(e) => setSignup(e)}>Create</button>
      </form>
        </Row>
        <h1>log in </h1>

        <Row>
        <form >
        <input id="loguser" name="emailbar" type="email1" ref={usernameS}  />
        <label htmlFor="emailbar"> Email </label>

        <input id="logpass" name="searchBar" type="password1" ref={passwordS} />
        <label htmlFor="searchBar"> password </label>

        <button className="btn btn-primary" style={{ marginLeft: "20px" }} type="submit" onClick={(e) => letsLogIn(e)}>login</button>
      </form>
        </Row>
      </Container>
    );
  }


export default loginField;
