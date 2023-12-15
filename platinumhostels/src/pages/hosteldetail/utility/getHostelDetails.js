import hostels from '../../../data/hostels.json'

export default function getHostelDetails(hostelLocation) {
  const hostelDetails = hostels.find(hostel => hostel.location.toLowerCase() === hostelLocation.toLowerCase())

  if (hostelDetails) {
    return {'response_code': 200, 'data': hostelDetails}
  } else {
    return {'response_code': 404, 'data': 'Not Found'}
  }
}
