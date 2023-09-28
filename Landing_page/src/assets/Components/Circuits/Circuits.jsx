import React from 'react'
import { useState } from 'react'
import LoadingPage from '../UI/Loading/LoadingPage'
export default function Circuits() {
    const [loading, setLoading] = useState(true)
  return (
    <>
    {loading ? <LoadingPage/> : <p>Constructors</p> }
    </>
  )
}
