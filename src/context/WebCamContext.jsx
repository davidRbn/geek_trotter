import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const WebCamContext = createContext()
export const WebCamController = (props) => {
  const [cam, setCam] = useState([]);
  // const [country, setCountry]= useState('FR')
  let shuffle1 = Math.floor(Math.random()*50)
  let shuffle2 = Math.floor(Math.random()*50)
  let shuffle3 = Math.floor(Math.random()*50)

  useEffect (() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

  const getData = () =>{
    axios.get(`https://api.windy.com/api/webcams/v2/list/limit=50?show=webcams:image,location,player&key=UFebPKjuVv8a28DWFr2z9hcQQa2NlDZS`)
    .then(response => setCam(response.data.result.webcams.filter((e,index) => index === shuffle1 || index === shuffle2 || index === shuffle3 )))
  }

  return(
    <WebCamContext.Provider value={[cam, setCam]}>
      {props.children}
    </WebCamContext.Provider>
  )   
}

