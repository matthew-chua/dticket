import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../button/Button";
import {ethers} from 'ethers'

const NavBar = (props) => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

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


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
    props.setUser(newAccount);
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

  const disconnect = () =>{
    setDefaultAccount(null)
  }
	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

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
        {defaultAccount ? <NavLink
        to="/profile"
        text="Profile"
        className={classes.navLink}
        activeClassName={classes.activeNavLink}
        exact
        onClick={menuClickHandler}
        >
          <b>Profile</b>
        </NavLink> : null}
      </div>
      <div className={classes.buttonGroup}>
      {/* <NavLink
        to={"login"}
        // className={classes.button}
      > */}
        {!defaultAccount ? <Button onClick={connectWalletHandler} text="Connect Wallet" /> :
        <Button onClick={disconnect} text={defaultAccount.slice(0, 10) + "..."} />
        }
      {/* </NavLink> */}
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