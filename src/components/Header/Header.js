import React, { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./header.scss";

export default function Header() {
  const [{ totalItems, totalWishlist }] = useContext(CartContext);

  return (
    <div className="header-wrap">
      <div className="logo">
        <h1>MINI</h1>
      </div>

      <div className="cart">
        <Link to="/cart">
          <IoCartOutline className="icon cart-icon" />
          <span className="cart-amount">{totalItems}</span>
        </Link>
        <Link to="/wishlist">
          {" "}
          <FiHeart
            className="icon heart-icon"
            style={{ color: totalWishlist > 0 ? "red" : "" }}
          />
          <span className="cart-wishlist">{totalWishlist}</span>
        </Link>
      </div>

      <div className="nav-bar">
        <ul className="nav-list">
          <NavLink exact className="link-item" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink className="link-item" to="/store" activeClassName="active">
            Shop
          </NavLink>
          <NavLink className="link-item" to="/blog" activeClassName="active">
            Blog
          </NavLink>
          <NavLink className="link-item" to="/login" activeClassName="active">
            Login/
            <NavLink
              className="link-item"
              to="/register"
              activeClassName="active"
            >
              Register
            </NavLink>
          </NavLink>

          <NavLink className="link-item" to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
