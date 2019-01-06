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
              <Button color="success" style={{ margin: '0em 0.6em'}} target="_blank" rel="noreferrer" ariaLabelledby="online giving Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=K68GMA2X9A3TU&item_name=ODEM+Missions+2019&currency_code=USD&source=url">
                <FontAwesomeIcon icon={['fab', 'paypal']} size="lg" color="#fff" style={{ margin: '0em 0.6em 0em 0.2em' }}/>
                Online Giving
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

