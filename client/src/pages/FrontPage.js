import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Searchbar from "../components/Searchfield";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function productPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadAllProds()
  }, [])

  function loadAllProds() {
    API.getPopItems()
      .then(res =>
        setProducts(res.data),
      )
      .catch(err => console.log(err));
  };
 
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  console.log(products)

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Search for Products</h1>
          </Jumbotron>
          <Searchbar></Searchbar>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Top Products</h1>
          </Jumbotron>
          {products.length ? (
            <List>
              {products.map(prod => (
                <ListItem key={prod._id}>
                  <strong>
                    <img alt="logo" style={{ width: 50, height: 50, overflow: 'hidden', resizeMode: 'contain' }} src={prod.images.standard}></img>  {prod.names.title}
                  </strong>
                  <br />
                  <br />

                  <div style={{ display: "flex" }}>
                    <strong> Price:{prod.prices.current}</strong>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default productPage;
