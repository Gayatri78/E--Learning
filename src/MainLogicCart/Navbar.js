//Navbar: Displays navigation options including the number of items in the cart.

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../StyleCart/navbar.css';

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Available Courses
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FontAwesomeIcon icon={faCartPlus} />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
