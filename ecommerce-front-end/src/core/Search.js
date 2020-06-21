import React, {useState, useEffect} from "react";
import Layout from './Layout'
import {getCategories, list} from './apiCore'
import Card from './Card'

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: '',
    search: '',
    results: [],
    searched: false
  });

  //this just means u dont have to write data.categories etc.
  const {categories, category, search, results, searched} = data

  const loadCategories = () => {
    getCategories().then(data => {
      if(data.error){
        console.log(data.error)
      } else {
        setData({...data, categories: data})
      }
    })
  }

  useEffect(() => {
    loadCategories()
  }, []);

  const searchData = () => {
    if(search) {
      list({search: search || undefined, category: category})
        .then(response => {
          if(response.error) {
            console.log(response.error);
          } else {
            setData({...data, results: response, searched: true});
          }
        })
    }
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  }

  //name could be category or search believe
  const handleChange = name => event => {
    setData({...data, [name]: event.target.value, searched:false})
  }

  //defaut value of results is an empty array
  const searchedProducts = (results = []) => {
    return (
      <div className = "row">
        {results.map((product, i) => (
          <Card key = {i} product = {product}/>
        ))}
      </div>
    )
  }
//span is to make it all inline
  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className="input-group-text">
        <div className = "input-group input-group-lg">
        <div className="input-group-prepend">
          <select className="btn mr-2" onChange={handleChange("category")}>
            <option value="All">All</option>
            {categories.map((c, i) => (
              <option key={i} value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>
        <input
          type="search"
          className="form-control"
          onChange={handleChange("search")}
          placeholder="Search by Name"
        />
        </div>
        <div className="btn input-group-append" style={{border:'none'}}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );

  return (
    <div className="row">
      <div className="container mb-3">
        {searchForm()}
      </div>
      <div className="container-fluid mb-3">
        {searchedProducts(results)}
      </div>
    </div>
  )
};
export default Search
