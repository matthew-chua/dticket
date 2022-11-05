import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../button/Button";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuIsOpen((prevState) => {
      return !prevState;
    });
  };

  const navBarLinks = [
    {
        to: "/",
        text: "Home",
      },
      {
        to: "/events",
        text: "Events",
      },
    //   {
    //     to: "/marketplace",
    //     text: "Marketplace",
    //   },
      {
        to: "/verify",
        text: "Verify",
      },
  ]

  return (
    <div className={classes.wrapper}>
    <div className={`${classes.navBar} ${classes.navBarJustify}`}>
      <NavLink to="/">
        <h1 className={classes.navTitle}><b>D'Ticket</b></h1>
      </NavLink>
      <div className={`${classes.navLinks} ${menuIsOpen || classes.close}`}>
        {navBarLinks.map((link) => (
          <NavLink
            key={link.to}
            className={classes.navLink}
            to={link.to}
            activeClassName={classes.activeNavLink}
            exact
            onClick={menuClickHandler}
          >
            <b>{link.text}</b>
          </NavLink>
        ))}
      </div>
      <div className={classes.buttonGroup}>
      <NavLink
        to={"login"}
        // className={classes.button}
      >
        <Button text="Connect Wallet" />
      </NavLink>
      <i
        className={`${menuIsOpen ? "fa fa-times" : "fa fa-bars"} ${classes.icon}`}
        onClick={menuClickHandler}
      ></i>
      </div>
    </div>
    </div>
  );
};

export default NavBar;