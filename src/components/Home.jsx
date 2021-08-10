import React, {useContext, useEffect} from 'react'
import { WebCamContext } from '../context/WebCamContext'
import './home.css'; 

const Home =()=> {
  const [cam, setCam] = useContext(WebCamContext)

  return(
    <div className="body">
      <h1>Vers le confinement et au dela </h1>
      <p className="texte">Parce qu’un confiné n’est pas forcement un imbécile encerclé …<br/>
        Nous vous proposons de partir ou vous le souhaitez selon vos envie 
        depuis votre canapé ! 
        <br/>Voici nos quelques idées du jour : 
      </p>
      <div className="iframe">
        {cam.map(e =>{ 
          return(
          <div className = 'homepage'>
          <iframe 
          title={e.title}
          width="300"
          height="200"
          src={e.player.lifetime.embed}/><h6>{e.title}</h6>
          </div>
          )
        })}
      </div>
    </div>
    )
}

export default Home 