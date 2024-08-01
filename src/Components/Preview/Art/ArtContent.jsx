import React, { useContext } from 'react'
import { userContext } from '../Business/BusinessContext'

function ArtContent() {
  const {data} = useContext(userContext)
  return (
    <div>
      art
    </div>
  )
}

export default ArtContent
