import React, { useEffect, useState } from 'react'
import './Constructors.css'
import BahrainSVG from '../UI/Loading/bahrain'
import LoadingPage from '../UI/Loading/LoadingPage'
export default function Constructors() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {

  })
  return (
  <>
  {loading ? <LoadingPage/> : <p>Constructors</p> }
  </>
  )
}
