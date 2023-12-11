import React from 'react'
import {useParams} from 'react-router-dom' 

export default function HostelDetail() {
  const params = useParams()
  console.log(params);
  return (
    <div>{params.hostelName}</div>
  )
}
