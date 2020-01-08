import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 300,
    height: 600,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

class MyDocument extends React.Component {

  render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{this.props.text}</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    )
  }


}


export default MyDocument;
