import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  scrollView: {
    flex: 1
  },
  cardContainer: {
    backgroundColor: "black"
  },
  card: {
    borderRadius: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "black"
  },
  lottie: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
    marginBottom: 10,
    color: "white"
  },
  description: {
    fontWeight: "300",
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#f3f4f6",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    width,
    paddingHorizontal: 10
  },
  btnText: {
    color: "black",
    margin: 10,
    fontSize: 14
  },
  indicatorWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
