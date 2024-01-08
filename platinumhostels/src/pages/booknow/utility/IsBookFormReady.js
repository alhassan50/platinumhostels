import React from 'react'
import {redirect} from 'react-router-dom'

//context
import { useBookNowContext } from '../../../Context/BookNowContext'
import Rooms from '../../Rooms';

export default function IsBookFormReady() {
  console.log('hello from ddd');
  const l = false

  //const {isBookNowFormDataReady} = useBookNowContext()

  if (!l) {
    throw redirect('/booknow?n', {replace: true})
  }

  return (
    <Rooms />
  )
}
