import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const Component = (props) => {
  return (
    <React.Fragment>
      <head>
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" />
      </head>
        <BrowserRouter>
          {props.children}
        </BrowserRouter>
    </React.Fragment>
  )
}

export default Component