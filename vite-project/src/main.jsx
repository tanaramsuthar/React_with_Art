import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ART from './ART.jsx/'


function myApp(){
  return(
    <> 
    <h1>hello world !</h1>
    </>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a', 
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google'
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // myApp()  // function
       <ART/>
      // reactElement // create using/by React 
      // anotherElement // object 
)
