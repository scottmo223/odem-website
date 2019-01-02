import React from 'react';
import { Link } from 'gatsby'
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand ><Link to="/" style={{ color: `#333333`}}>{this.props.children}</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about/"><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/contact/"><NavLink>Contact Us</NavLink></Link>
              </NavItem>
              {/*<NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <Button color="success" target="_blank" rel="noreferrer" ariaLabelledby="online giving Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=K68GMA2X9A3TU&item_name=ODEM+Missions+2019&currency_code=USD&source=url">Online Giving</Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

