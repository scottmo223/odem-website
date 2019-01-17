import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

export default class HeaderNav extends React.Component {

    
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="sticky-top">
        <Navbar color="dark" dark expand="md">
        <Link to="/">
          <NavbarBrand style={{ color: 'rgba(255,255,255,.5)', fontWeight: '800' }}>{this.props.children}</NavbarBrand>
        </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/about/"><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/contact/"><NavLink>Contact Us</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/donate/">
                  <NavLink>
                    Online Giving
                    <FontAwesomeIcon icon={['fab', 'paypal']} size="lg" style={{ marginLeft: '0.3em' }}/>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

