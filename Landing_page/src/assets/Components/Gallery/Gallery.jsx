import React from 'react'
import { useState } from 'react'
import LoadingPage from '../UI/Loading/LoadingPage'
export default function Gallery() {
    const [loading, setLoading] = useState(true)
  return (
    <>
    {loading ? <LoadingPage/> : <p>Gallery</p> }
    </>
  )
}