import React, { useContext, useState } from "react";
import ContextCart from "../cart/ContextCart";
import ContextLogin from "../cart/ContextLogin";

const NavBar = ({ cart }) => {
  const { isLogged, logIn, logOut } = useContext(ContextLogin);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useContext(ContextCart);
  return (
    <nav>
      <ul>
        <li>
          {isLogged ? (
            <div>
              <span>Log in successfully!</span>
              <button onClick={() => logOut()}>LogOut</button>
            </div>
          ) : (
            <button onClick={() => logIn()}>LogIn</button>
          )}
        </li>
        <li>
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            Cart({items.length})
          </button>
          {/* <button>Cart({items.length})</button> */}
        </li>
      </ul>

      {isCartOpen && items.length > 0 && (
        <div className="cart-open">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
