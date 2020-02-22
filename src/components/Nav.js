import React from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 1000px;
  margin: 10px;
  display: flex;
  h3 {
    color: black;
    background: gray;
  }
  a:link {
    text-decoration: none
  }

  justify-content: center;
  h3 {
    padding: 10px 10px;
    }
`;

function Nav(props) {
  return (
    <NavContainer>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/characters'><h3>Characters</h3></Link>
    </NavContainer>
  );
}

export default Nav;