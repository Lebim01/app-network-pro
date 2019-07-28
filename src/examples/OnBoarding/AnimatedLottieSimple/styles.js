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
  headerContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  card: {
    borderRadius: 0,
    flex: 1,
    backgroundColor: "black"
  },
  lottie: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white"
  },
  description: {
    fontWeight: "300",
    color: "white",
    fontSize: 18
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 20
  },
  button: {
    padding: 5,
    margin: 5
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
