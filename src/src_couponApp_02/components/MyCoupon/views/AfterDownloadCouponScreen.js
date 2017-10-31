'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";


class AfterDownloadCouponScreen extends React.Component {

  _review = function() {
    console.log(this.props);
  }

  render(){

    // const coupon = this.props.navigation.state.params.coupon

    return(
      <View style={styles.container}>
        {/* <NormalText>{coupon.name}</NormalText> */}
        <Button
          onPress={this._review}
        >
          <NormalText>hello</NormalText>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  couponListBox: {
    marginTop: 30
  },
  createCoupon: {
    backgroundColor: colors.green,
    marginTop: 30
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 24
  },
  list: { flex: 1, flexDirection: "row" },
  listContent: { flex: 1, flexDirection: "column" },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: "#DDDDDD"
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: "#EEEEEE",
    alignItems: "center"
  },
  headingText: { flex: 1, fontSize: 24, alignSelf: "center" }
});

export default AfterDownloadCouponScreen;
