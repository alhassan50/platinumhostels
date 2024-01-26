import React, {useMemo, useState} from 'react'
import { Link, Await, defer } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'

//components
import Loader from '../../../../shared/components/Loader'
import TryAgain from '../../../Rooms/components/TryAgain'

//utility
import getBookingSummary from '../../../../utility/getBookingSummary'

//context
import { useUserContext } from '../../../../Context/UserContext'
import BookingSummaryLoader from './BookingSummaryLoader'

//loader
const loadBookingSummary = (userTokenID) => {
    const bookingSummarypPromise = getBookingSummary(userTokenID)
    return defer({bookingSummary: bookingSummarypPromise})
}

export default function BookingSummary() {
    //console.log('mounting booking summary component');

    const {userTokenID} = useUserContext()

    const [refreshComponent, setRefreshComponent] = useState(false)

    const [tokenState, setTokenState] = useState('pending')
    const [initialRender, setInitialRender] = useState(true)
    
    const bookingSummarypPromise = useMemo(() => {
        if (userTokenID) {
            setTokenState('valid')
            return loadBookingSummary(userTokenID)
        } else {
            if (!initialRender) {
                setTokenState(null)
            }
        }
        setInitialRender(false)
    }, [userTokenID, refreshComponent])
    

  return (
    <div className='bg-white rounded-md py-8 px-4 border'>
        <h3>Booking Summary</h3>
        {
            tokenState === 'valid' ?
                <React.Suspense
                    fallback={
                        <BookingSummaryLoader/>
                    }
                >
                    <Await
                        resolve={bookingSummarypPromise.data.bookingSummary}
                        errorElement={
                            <TryAgain 
                                errorMessage={"Something went wrong."} 
                                setRefreshComponent={setRefreshComponent}
                            />
                        }
                    >
                        {
                            (bookingSummary) => {
                                //console.log("book sum: ", bookingSummary);
                                return (
                                    <div>
                                        <table className='w-full mt-4'>
                                            <tbody>
                                                <tr>
                                                    <th> 
                                                        Booking Date
                                                    </th>
                                                    <td>
                                                        {bookingSummary.bookingDate}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Amount Paid
                                                    </th>
                                                    <td>
                                                        GHC {bookingSummary.amountPaid}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        Payment Deadline
                                                    </th>
                                                    <td>
                                                        {bookingSummary.paymentDeadline}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className='mt-8 flex flex-wrap gap-4 items-center'>
                                            <Link to={'/platinumportal/payment'} className=''>
                                                <button className='btn-primary1 flex justify-center items-center gap-2 group text-white'>
                                                    Make Payment
                                                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                                        <img src={arrow} alt='right arrow'/>
                                                    </figure>
                                                </button>
                                            </Link>

                                            <Link to={'/platinumportal/payment'} className=''>
                                                <button className='btn-ghost2 flex justify-center items-center gap-2 group text-primary'>
                                                    View Payment Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    </Await>
                </React.Suspense>
            :
                tokenState === 'pending' ?
                    <BookingSummaryLoader />
                :   
                    <div className='mt-4 flex justify-start items-center'>
                        <p>Couldn't find your booking summary.</p>
                    </div>
        }
    </div>
  )
}
