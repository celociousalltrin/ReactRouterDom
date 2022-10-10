import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Product = () => {
  return (
    <div>
        <input type="search" placeholder='search products...' />
        <h1>This is Products Page</h1>
        <nav className='Secondary__Nav'>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Product;