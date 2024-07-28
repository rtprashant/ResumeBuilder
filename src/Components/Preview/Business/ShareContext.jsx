import React, { useState } from 'react'
import { BusinessContext } from './BusinessContext'
import BusinessManagement from './BusinessManagement'
import BusinessPreviewC from './BusinessPreviewC'
import Form from './Form'
import Content from './Content'

function ShareContext() {
    const [data ,setData] = useState()
  return (
    <BusinessContext>
       <Form/>
       <Content/>
        <BusinessPreviewC/>
    </BusinessContext>

  )
}

export default ShareContext
