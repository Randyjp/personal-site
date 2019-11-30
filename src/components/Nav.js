import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  faBlog,
  faFilePdf,
  faAddressCard,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breakpoint from 'styled-components-breakpoint';
import logoSVG from '../../content/assets/logo.svg';
import FaIcon from './FaIcon';
import resume from '../../content/files/RandyPerezResume.pdf';

const NavBarContext = React.createContext();

const StyledNavBar = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding: 0.5rem;

  ${breakpoint('tablet')`
    flex-wrap: nowrap;
  `}
`;

const StyledBurgerButton = styled.div`
  padding: 1rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${breakpoint('tablet')`
    display: none;
  `}
`;

const StyledMenuContainer = styled.div`
  align-items: center;
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;

  a {
    cursor: pointer;
    flex: 1 1 100%;
    text-align: center;
    padding: 0.5rem 0.75rem;
    width: 100%;
  }

  .is-active,
  a:hover,
  a:active {
    background-color: #fafafa;
    color: black;
    font-weight: 700;
  }

  ${breakpoint('tablet')`
    display: flex;
    flex-direction: row;
    margin: 0;
    min-width: 25rem;
    padding: 0;
    width: auto;
  `}
`;

const StyledLogoContainer = styled.span`
  margin: 0 auto;

  img {
    margin-bottom: 0;
    vertical-align: text-top;
    width: 130px;
  }

  ${breakpoint('tablet')`
    margin: 0 auto 0 1rem;
  `}
`;

function useNavBarContext() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error(
      `NavBar compound components cannot be rendered outside the NavBar component`
    );
  }
  return context;
}

function Navbar({ active, children }) {
  const [isActive, setActive] = useState(active);

  return (
    <NavBarContext.Provider value={{ isActive, setActive }}>
      <StyledNavBar>{children}</StyledNavBar>
    </NavBarContext.Provider>
  );
}

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

function Brand({ children }) {
  return <StyledLogoContainer>{children}</StyledLogoContainer>;
}

Brand.propTypes = {
  children: PropTypes.element.isRequired,
};

function Menu({ children }) {
  const { isActive } = useNavBarContext();
  return (
    <StyledMenuContainer active={isActive}>{children}</StyledMenuContainer>
  );
}

Menu.propTypes = {
  children: PropTypes.element.isRequired,
};

function Burger() {
  const { isActive, setActive } = useNavBarContext();
  return (
    <StyledBurgerButton role="button" onClick={() => setActive(!isActive)}>
      <FontAwesomeIcon
        icon={isActive ? faTimes : faBars}
        size="lg"
        color="gray"
      />
    </StyledBurgerButton>
  );
}

Navbar.Brand = Brand;
Navbar.Menu = Menu;
Navbar.Burger = Burger;

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <Navbar.Burger onClick={() => setIsOpen(!isOpen)} />
      <Navbar.Brand>
        <Link to="/">
          <img src={logoSVG} alt="site logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Menu>
        <FaIcon
          displayName="Blog"
          icon={faBlog}
          color="orange"
          url="/"
          cssClass="navbar-item"
        />
        <FaIcon
          displayName="About"
          color="green"
          icon={faAddressCard}
          url="/about"
          cssClass="navbar-item"
        />
        {/* <NavItemLink
                    name="Services"
                    icon={faKeyboard}
                    color="grey"
                    to="#"
                  /> */}
        <FaIcon
          displayName="Resume"
          icon={faFilePdf}
          color="red"
          url={resume}
          cssClass="navbar-item"
        />
      </Navbar.Menu>
    </Navbar>
  );
}

export default Nav;
