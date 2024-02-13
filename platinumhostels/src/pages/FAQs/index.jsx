import React, { useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

import FAQComponent from '../../shared/components/FAQComponent';

export default function FAQs() {
    const {toggleSideBar} = useOutletContext();
    useEffect(() => {toggleSideBar(false)}, []);

  return (
    <FAQComponent />
  )
}
