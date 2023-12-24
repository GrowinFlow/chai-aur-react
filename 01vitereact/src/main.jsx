import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx'

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click and Open Google..'
// }

const abc = (
  <a href="https://google.com" target='_blank'>google</a>
)
const globalUser = "Theo";

const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  ' Click && open google ====>>',
  globalUser,
  ` ====>>click google  **||**   ${globalUser}`,
)
const reactElement2 = React.createElement(
  'mark',
  {//attribute
  },
  globalUser,
)


ReactDOM.createRoot(document.getElementById('root')).render(

  // <>  
  // <App />
  // <Card />
  //  </>
  reactElement2
  // reactElement
  //  abc 
)
