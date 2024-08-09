// Courses: Main component that manages the state of the application including showing either the list of courses or the cart.
import React, { useState } from 'react';
import Navbar from '../MainLogicCart/Navbar';
import CourseCard from '../MainLogicCart/CourseCard';
import Cart from '../MainLogicCart/Cart';
import '../StyleCart/CourseCard.css';


function Courses() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => item.id === product.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
    alert(`Course has been added to your cart`); // Display success message
  };

  const handleChange = (item, d) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        const newAmount = cartItem.amount + d;
        if (newAmount <= 0) {
          return { ...cartItem, amount: 0 };
        }
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    });

    setCart(updatedCart.filter((cartItem) => cartItem.amount > 0)); // Remove items with 0 quantity
  };

  return (

    <div>

      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />


        {show ? <CourseCard handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
        {warning && <div className='warning'>Item is already added to your cart</div>}
      </React.Fragment>
    </div>
  );
}

export default Courses;
