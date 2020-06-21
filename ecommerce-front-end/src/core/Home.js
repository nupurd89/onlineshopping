import React, {useState, useEffect} from "react";
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from './Card'
import Search from './Search'

const Home = () => {
  const [productsBySell, setProuctsBySell] = useState([])
  const [productsByArrival, setProuctsByArrival] = useState([])
  const [error, setError] = useState(false)

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProuctsBySell(data)
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setProuctsByArrival(data)
      }
    });
  };

  useEffect(() => {
    loadProductsBySell()
    loadProductsByArrival()
  }, [])

  return (
    <Layout title="Home Page" description="Node React E-commerce App" className="container-fluid">
    <Search/>
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product}/>
        ))}
      </div>

      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <Card key={i} product={product}/>
        ))}
      </div>
    </Layout>
  )
};

export default Home
