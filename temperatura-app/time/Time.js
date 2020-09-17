import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Moment from "moment";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeNow: this.timeNow() };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeNow}>{this.state.timeNow}</Text>
      </View>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeNow: this.timeNow(),
      });
    }, 30);
  }
  timeNow() {
    return Moment().format("H:mm:ss");
  }
}
const styles = StyleSheet.create({
  timeNow: {
    textShadowColor: "#E5D700",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
    fontSize: 30,
    color: "#E5D700",
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#E5D700",
    alignItems: "center",
    justifyContent: "center",
  },
});
