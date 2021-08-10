import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Envie from './components/Envie'
import Test from './components/Test'
import Test2 from './components/Test2'

class Router extends React.Component {
  render() {
    return(
      <>
        <NavBar />
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path= "/Recherche" component={Envie} />
          {/* <Route path= "/search/:countryName" component={Test2} /> */}
          <Route exact path= "/search/:countryName" component={Test2} />
          <Route exact path= "/resultat/:categoryName" component={Test} />
        </Switch>   
        <Footer />
      </>
    )
  }
}

export default Router 