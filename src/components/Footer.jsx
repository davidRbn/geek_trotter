import React from 'react'
import './Footer.css'

class Footer extends React.Component{
  render() {
    return(
      <div className ="footer">
        <ul className="firstColumn">
          <li className="FooterLink">Contactez nous</li>
          <li className="FooterLink">A propos</li>
          <li className="FooterLink">Mentions Legales </li>
        </ul>
        <ul className="secondColumn">
          <li><img className ="RS" src ="https://cdn.icon-icons.com/icons2/1183/PNG/512/1490133467-social-icons07_82213.png" alt='facebook'/></li>
          <li><img className ="RS" src ="https://cdn.icon-icons.com/icons2/1582/PNG/512/instagram_108043.png" alt='instagram'/></li>
          <li><img className ="RS" src ="https://upload.wikimedia.org/wikipedia/commons/f/fb/Google-plus-circle-icon-png.png" alt='google+'/></li>
        </ul> 
      </div>
    )
  }
}

export default Footer