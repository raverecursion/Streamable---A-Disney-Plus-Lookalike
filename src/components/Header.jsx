import { React, useEffect } from "react";
import { auth, provider } from "../firebase.js";
import { useHistory, Link } from "react-router-dom";

import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

// Styles
import styled from "styled-components";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      let user = result.user;

      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(
      function () {
        dispatch(setSignOut);
        history.push("/")
        // window.location.replace("http://localhost:3000/");
        console.log("Signout Succesfull");
      },
      function (error) {
        console.log("Signout Failed");
      }
    );
  };

  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
        <Link to="/">
          <img alt="home" src="images/home-icon.svg" />
          <span>HOME</span>
        </Link>
        <Link to="/">
          <img alt="search" src="images/search-icon.svg" />
          <span>SEARCH</span>
        </Link>
        <Link to="/">
          <img alt="watchlist" src="images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </Link>
        <Link to="/">
          <img alt="originals" src="images/original-icon.svg" />
          <span>ORIGINALS</span>
        </Link>
        <Link onClick={signOut} to="/">
          <img alt="movies" src="images/movie-icon.svg" />
          <span>MOVIES</span>
        </Link>
        <Link to="/">
          <img alt="series" src="images/series-icon.svg" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      {!userName ? (
        <Login onClick={signInWithGoogle}>Login</Login>
      ) : (
        <>
          <UserImg
            alt="profile image"
            onClick={signOut}
            src={`${userPhoto}`}
          ></UserImg>
        </>
      )}
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  height: 80px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  position: relative;
  display: flex;
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin: 15px;
    cursor: pointer;

    img {
      width: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  overflow-x: hidden;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 2px solid #f9f9f9;
  border-radius: 8%;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    border-color: transparent;
  }
`;
