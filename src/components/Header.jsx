import React from "react";

// Styles
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img alt="home" src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img alt="search" src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img alt="watchlist" src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img alt="originals" src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img alt="movies" src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img alt="series" src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg alt="profile image" src=""></UserImg>
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  a {
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
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
