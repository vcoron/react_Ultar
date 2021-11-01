import React from 'react';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor , NavLink1 } from './style';
const Navbar = () =>{ 
   
    return( 
      <NavbarSection>
            
      <div className="container">
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>
          
          
          <UlList>
              <ListItem><NavLink1 to="/">Home</NavLink1></ListItem>
             <ListItem><Anchor href="#">Work</Anchor></ListItem>
              <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
              <ListItem><Anchor href="#">Resume</Anchor></ListItem>
              <ListItem><Anchor href="#">About</Anchor></ListItem>
              <ListItem><NavLink1 to="/Contact">Contact</NavLink1></ListItem>
          </UlList>
          
      </div>
      
  </NavbarSection>
    )
  }

 
export default Navbar;
