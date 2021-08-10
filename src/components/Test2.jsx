import React, {useState, useEffect} from 'react'
import './Footer.css'
import './test.css'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'


const Test2 = () => {
  const [camCategory, setCamCategory] = useState([]);
  const [country , setCountry] = useState('FR');
  let shuffle1 = Math.floor(Math.random()*50)
  let shuffle2 = Math.floor(Math.random()*50)
  let shuffle3 = Math.floor(Math.random()*50)

  const getData = () =>{
    axios.get(`https://api.windy.com/api/webcams/v2/list/country=${countryName}/limit=50?show=webcams:location,player&key=UFebPKjuVv8a28DWFr2z9hcQQa2NlDZS`)
    .then(response => setCamCategory(response.data.result.webcams.filter((e,index) => index === shuffle1 || index === shuffle2 || index === shuffle3 )))
  }

  useEffect (() => {
    getData()
  },[]) 
  
  let {countryName} = useParams()
   
  function titre(){
    if(countryName === 'FR'){
      return 'la France'
    }
    else if(countryName === 'IT'){
      return "l'Italie"
    }
    else if(countryName === 'DE'){
        return "l'Allemagne"
      }
    else if(countryName === 'US'){
      return 'les Etats-Unis'
    }
    else if(countryName === 'JP'){
        return 'le Japon'
    }  
    else if(countryName === 'ZA'){
        return "l'Afrique du Sud"
    }
    else if(countryName === 'GB'){
        return 'le Royaume-Uni'
    }
    else if(countryName === 'CA'){
        return 'le Canada'
    }
    else if(countryName === 'ES'){
        return "l'Espagne"
      }
    else if(countryName === 'RU'){
      return 'la Russie'
    }
  }

  return(  
    <div className="body">
      <Link to="/">
        <p className="precedent"><svg class="bi bi-caret-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 010-1.506l5.48-4.796A1 1 0 0111 3.204v9.592a1 1 0 01-1.659.753z" clip-rule="evenodd"/>
          </svg>Précédent
        </p>
      </Link>

      <h1>Découvrir {titre()}</h1>
      <div className="Iframe1">
      {camCategory.map(e =>{ 
      return( 
        <div className="Iframe">  
          <iframe 
            title={e.title}
            width="500"
            height="300"
            src={e.player.lifetime.embed} />
            <h4>{e.title}</h4>
        </div>
      )
    })}
    </div>
    
    </div>
  )
}

export default Test2