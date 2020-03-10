import React from  'react';

import {BrowserRouter,Route,Switch ,Link,NavLink} from 'react-router-dom';


const Header =()=>
(
   <header>
   <h1>EXPENSIFY</h1>
   <NavLink to='/' activeClassName="active-class"  exact={true}>LETS GO TO HOMEPAGE</NavLink>
   <br></br>
   <br></br>
   <NavLink to='/create'  activeClassName="active-class">LETS GO TO CREATEPAGE</NavLink>
   <br></br>
   <br></br>
  
   <NavLink to='/HelpPage'  activeClassName="active-class">LETS GO TO HELPPAGE</NavLink>
   <br></br>
   <br></br>
   

   </header>

)

export default Header;