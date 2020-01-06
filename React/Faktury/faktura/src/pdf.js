import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
  padding: 30,
},
header: {
  fontSize: 50,
},
container: {
  flexDirection: 'column',
  flexGrow: 9,
  alignItems: "center",
 },
})

class MyDocument extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Document>
    <Page style={styles.page}>
     <View style={styles.container}>
       <Text style={styles.header}>Faktura</Text>
       <Text>{this.props.name}</Text>
       <Text>{this.props.company}</Text>
     </View>
    </Page>
    </Document>
    )
  }
}





  export default MyDocument;
