import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function myCart() {

  const [cart, setCart] = useState([]);

  const totalStyle = {
    fontSize:"20px",
    textAlign : "right" 
};

  useEffect(() => {
    loadCart();
  }, []);

  
  function loadCart(){
    API.grabCart()
    .then(res => setCart(res.data ))
  };

  function deleteProduct(id){
    API.deleteProduct(id)
    .then(res => loadCart())
  };

  function accumulateTotal(cart) {
    const total = cart.reduce((p, c) => (parseFloat(p) + parseFloat(c.price)), 0);
    return formatCurrency(total);
}

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
  console.log(cart)

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Cart
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <table className="table table-info table-bordered">
                        <tbody>
                            {cart.map(function (o) {
                                return <tr key={`'${o._id}'`}>
                                    <th key={`'${o._id + 1}'`}>{o.name}</th>
                                    <th key={`'${o._id + 2}'`}>{o.price}</th>
                                    <th key={`'${o._id + 3}'`}><img src={o.image} alt={o.name} /></th>
                                    <th>
                                        <button key={`'${o._id + 4}'`} onClick={() => deleteProduct(o._id)} type="submit" >Delete</button>
                                    </th>
                                </tr>
                            })
                            }
                            <tr >
                                <td style={totalStyle}>Total</td>
                                <td key={"1"} style={totalStyle} colSpan="3">{accumulateTotal(cart)}</td>
                            </tr>
                        </tbody>
                    </table>
        </Row>
      </Container>
    );
  }


export default myCart;
