import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import logo from '../../../../assets/brand/logo3.png';
import { useUserContext } from '../../../../Context/UserContext';

const tableData = [
  { th: 'Hostel Location', td: 'Ayeduase' },
  { th: 'Block Name', td: 'Tower B' },
  { th: 'Room Floor', td: 'Ground Floor' },
  { th: 'Room Number', td: '2' },
  { th: 'Room Type', td: 'Single' },
  { th: 'Room Price', td: 'GHC 9000' },
  { th: 'Room Capacity', td: '1' },
  { th: 'Current Occupants', td: '1' },
];

const TableRows = ({ data }) => (
  <>
    {data.map(({ th, td }, index) => (
      <View style={styles.table} key={index}>
        <Text style={styles.th}>{th}: </Text>
        <Text style={styles.td}>{td}</Text>
      </View>
    ))}
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

const BookingDetailsDoc = ({displayName, email, phoneNumber}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={logo} style={styles.logo} />

        <View style={styles.hr} />

        <Text style={styles.header}>{displayName}</Text>
        <Text style={styles.p}>{email}</Text>
        <Text style={styles.p}>{phoneNumber}</Text>
        <Text style={styles.p}>{phoneNumber}</Text>
        
        <View style={styles.tableContainer}>
          <TableRows data={tableData} />
        </View>

        <Text style={styles.header}>Platinum Hostels, Kumasio</Text>
        <Text style={styles.p}>platinumhostelsgh@gmail.com</Text>
        <Text style={styles.p}>+233123456789</Text>

        <Text style={styles.notice}>
          Please Note that you are to make Payment of GHS 5,000.00 Latest by 12th January, 2024 in order to keep your room. Failure will lead to cancellation of Booking.
        </Text>
        
        <Text style={styles.notice}>
          Pay-in-Slip must be returned to the Hostel before the payments can be reflected.
        </Text>
        
        <Text style={styles.contact}>
          In case of any challenges with payment, please contact any of these Phone Numbers: 0243463320, 0243463320, 0243463320, or email us at platinumhostelsgh@gmail.com for assistance.
        </Text>
        
        <Text style={styles.thankyou}>
          Thank you
        </Text>
      </View>
    </Page>
  </Document>
);


export default function BookingPDF() {
  const {user} = useUserContext()
  console.log(user);

  const downloadPdf = async () => {
    const fileName = 'Booking Details.pdf';

    const blob = await pdf(
      <BookingDetailsDoc 
      displayName={user.displayName}
      email={user.email}
      phoneNumber={user.phoneNumber}
      />  
    ).toBlob();
    saveAs(blob, fileName);
  };


  return (
    <div>
      <BookingDetailsDoc 
        displayName={user.displayName}
        email={user.email}
        phoneNumber={user.phoneNumber}
      />
      <button onClick={() => (downloadPdf(user.displayName, user.email, user.phoneNumber))}>
        Download PDF
      </button>
    </div>
  );
}
