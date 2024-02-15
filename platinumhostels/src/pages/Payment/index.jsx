import React, {useEffect, useMemo, useState} from 'react'
import { useOutletContext, defer, Await } from "react-router-dom";

//components
import PaymentSectionHeader from './components/PaymentSectionHeader'
import PaymentDetails from './components/PaymentDetails'
import PaymentHistory from './components/PaymentHistory'
import PaymentLoader from './components/PaymentLoader';
import TryAgain from '../Rooms/components/TryAgain';

//utility
import getPaymentDetails from '../../utility/getPaymentDetails';
import { useUserContext } from '../../Context/UserContext';


const loadPaymentDetails = (userTokenID) => {
  
  const paymentDetailsPromise = getPaymentDetails(userTokenID)
  return defer({paymentDetails: paymentDetailsPromise})
}

export default function Payment() {
  const {toggleSideBar} = useOutletContext();
  const {userTokenID} = useUserContext();

  useEffect(() => {toggleSideBar(false)}, [])

  const [refreshComponent, setRefreshComponent] = useState(false)
  const [tokenState, setTokenState] = useState('pending')
  const [initialRender, setInitialRender] = useState(true)

  const paymentDetailsPromise = useMemo(() => {
    if (userTokenID) {
        setTokenState('valid')
        return loadPaymentDetails(userTokenID)
    } else {
        if (!initialRender) {
            setTokenState(null)
        }
    }
    setInitialRender(false)
  }, [userTokenID, refreshComponent])

  return (
    <div>
        <div>
            <PaymentSectionHeader />

            {
              tokenState !== 'valid' 
              ?
                <PaymentLoader />
              :
                <React.Suspense
                  fallback={
                    <div className=''>
                        <PaymentLoader />
                    </div>
                  }
                >
                  <Await 
                    resolve={paymentDetailsPromise.data.paymentDetails}
                    errorElement={
                        <TryAgain 
                            setRefreshComponent={setRefreshComponent}
                        />
                    }
                  >
                    {
                      (paymentDetails) => {
                          return(
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-start mt-4'>
                                <PaymentDetails paymentDetails={paymentDetails} />
                                <PaymentHistory paymentDetails= {paymentDetails} />
                            </div>
                          )
                      }
                    }
                  </Await>
                </React.Suspense>
            }
        </div>
    </div>
  )
}
