import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../../../assets/brand/logo3.png';

const TableRows = ({ data }) => (
  <>
    <View style={styles.table} key={0}>
      <Text style={styles.th}>Hostel Location: </Text>
      <Text style={styles.td}>{data.hostelLocation}</Text>
    </View>
    <View style={styles.table} key={1}>
      <Text style={styles.th}>Block Name: </Text>
      <Text style={styles.td}>{data.roomBlock}</Text>
    </View>
    <View style={styles.table} key={2}>
      <Text style={styles.th}>Room Floor: </Text>
      <Text style={styles.td}>{data.roomFloor}</Text>
    </View>
    <View style={styles.table} key={3}>
      <Text style={styles.th}>Room Number: </Text>
      <Text style={styles.td}>{data.roomNumber}</Text>
    </View>
    <View style={styles.table} key={4}>
      <Text style={styles.th}>Room Type: </Text>
      <Text style={styles.td}>{data.roomType}</Text>
    </View>
    <View style={styles.table} key={5}>
      <Text style={styles.th}>Room Price: </Text>
      <Text style={styles.td}>{data.roomPrice}</Text>
    </View>
    <View style={styles.table} key={6}>
      <Text style={styles.th}>Room Capacity: </Text>
      <Text style={styles.td}>{data.capacity}</Text>
    </View>
    <View style={styles.table} key={7}>
      <Text style={styles.th}>Current Occupants: </Text>
      <Text style={styles.td}>{data.currentOccupants}</Text>
    </View>
  </>
);

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    /* backgroundColor: '#E4E4E4' */
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  logo: {
    width: 100,
  },
  header: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2F4858',
  },
  p: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 300
  },
  table: {
    flexDirection: 'row',
    borderBottomColor: '#2F4858',
    borderBottomWidth: .5,
    marginBottom: 5,
    paddingBottom: 5,
  },
  th: {
    fontSize: 14,
    fontWeight: 500,
    width: '40%',
    color: '#2F4858',
  },
  td: {
    fontSize: 14,
    fontWeight: 300,
    width: '60%',
    textTransform: 'capitalize'
  },
  tableContainer: {
    marginVertical: 20,
  },
  even: {
    backgroundColor: '#2F4858',
  },
  hr: {
    borderBottomColor: '#2F4858',
    borderBottomWidth: .5,
    marginVertical: 20,
  },
  notice: {
    fontSize: 14,
    color: 'red',
    marginVertical: 5,
  },
  contact: {
    fontSize: 14,
    marginVertical: 5,
  },
  thankyou: {
    fontSize: 14,
    marginVertical: 5,
  }
});

export const BookingDetailsDoc = ({displayName, email, phoneNumber, room}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={logo} style={styles.logo} />

        <View style={styles.hr} />

        <Text style={styles.header}>{displayName}</Text>
        <Text style={styles.p}>{email}</Text>
        <Text style={styles.p}>{phoneNumber}</Text>
        
        <View style={styles.tableContainer}>
          <TableRows data={room} />
        </View>

        <Text style={styles.header}>Platinum Hostels, Kumasi</Text>
        <Text style={styles.p}>platinumhostelsgh@gmail.com</Text>
        <Text style={styles.p}>+233123456789</Text>

        <Text style={styles.notice}>
          {`Please Note that you are to make Payment of ${room.roomPrice} Latest by 12th January, 2024 in order to keep your room. Failure will lead to cancellation of Booking.`}
        </Text>
        
        <Text style={styles.notice}>
          Pay-in-Slip must be returned to the Hostel before the payments can be reflected.
        </Text>
        
        <Text style={styles.contact}>
          In case of any challenges with payment, please contact any of these Phone Numbers: +233557169843, +233509080776 or email us at platinumhostelsgh@gmail.com for assistance.
        </Text>
        
        <Text style={styles.thankyou}>
          Thank you
        </Text>
      </View>
    </Page>
  </Document>
);

