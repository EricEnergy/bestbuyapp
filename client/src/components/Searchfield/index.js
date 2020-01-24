import React, { useState } from 'react';
import API from '../../utils/API'
import { List, ListItem } from "../List";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  
  function productSearch(e) {
    e.preventDefault();
    API.apiSearch(searchTerm)
    .then(res => {
      setProducts(res.data);
    });
  }


  function addToCart(value) {
    var selectName = products.filter(a => a.sku === value)

    API.saveProduct({
      id: selectName[0].sku,
      name: selectName[0].name,
      price: selectName[0].regularPrice,
      image: selectName[0].thumbnailImage
    })
     console.log(selectName)
  }


  return (
    <section>
      <form >
        <input id="searchBar" name="searchBar" type="search" onChange={(e) => setSearchTerm(e.target.value)} />
        <label htmlFor="searchBar"> Search </label>
        <button className="btn btn-primary" style={{ marginLeft: "20px" }} type="submit" onClick={(e) => productSearch(e)}>Search</button>
      </form>
      {products.length ? (
            <List>
              {products.map(prod => (
                <ListItem key={prod._id}>
                  <strong>
                    <img  alt="logo" style={{ width: 50, height: 50, overflow: 'hidden', resizeMode: 'contain' }} src={prod.thumbnailImage}></img>  {prod.name}
                  </strong>
                  <br />
                  <br />
                  <div style={{ display: "flex" }}>
                    <strong> Price:{prod.salePrice}</strong>
                    <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={() => addToCart(prod.sku)}> Add to cart</button>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
    </section>
  );
}
