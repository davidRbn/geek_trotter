import React from 'react'
import {Navbar, Nav, Button, FormControl, Form, Carousel} from 'react-bootstrap'; 
import  { NavLink, Link }  from 'react-router-dom'
import './NavBar.css'

function catch_link() {
  var color;
  var target = document.getElementById("search").value;
  var T_link = ["France","/search/FR", "Italie","/search/IT", "Allemagne","/search/DE", "Etats-Unis","/search/US", "Japon","/search/JP", "Afrique du Sud","/search/ZA", "Royaume-Uni","/search/GB", "Canada","/search/CA", "Espagne","/search/ES", "Russie","/search/RU"];
  for (let i = 0; i < T_link.length; i++) {
      if (target == T_link[i]) {
          window.location = T_link[i + 1];
          // color = document.getElementById("ancre5");
          // color.style.backgroundColor = "yellow";
      }
  }
}
class NavBar extends React.Component{
  
render() {
    return (
    <div className="Lien1">
  <Navbar className="dark" >
    <Navbar.Brand href='/'><h3 className="Title">Geek Trotter</h3></Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to ='/'><p className="Lien">Accueil</p></NavLink>
      <NavLink to='/Recherche'><p className="Lien">Recherche</p></NavLink>
    </Nav>
    <Form inline>
      <FormControl list="countryList" type="text" placeholder="Rechercher un pays" className="mr-sm-2" id="search" onChange={catch_link} />
      {/* <Button onChange={catch_link} className="boutton" variant="outline-info">Rechercher</Button> */}
      <svg viewBox="654 -372 1664 1664" width="16" height="16"><path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5  C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z"></path></svg>
      
    </Form>
  </Navbar>
  <datalist id='countryList'>
                    <option value="France"></option>
                    <option value="Italie"></option>
                    <option value="Allemagne"></option>
                    <option value="Etats-Unis"></option>
                    <option value="Japon"></option>
                    <option value="Afrique du Sud"></option>
                    <option value="Royaume-Uni"></option>
                    <option value="Canada"></option>
                    <option value="Espagne"></option>
                    <option value="Russie"></option>
                  </datalist>
  </div>
    )}
}

export default NavBar