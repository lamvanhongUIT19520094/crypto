import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    marginTop: "6px",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "16px",
    paddingVertical: "8px",
    borderRadius: 6,
    backgroundColor: "white",
  },
  leftPannel: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    marginLeft: "10px",
    marginTop: "5px",
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: "6px",
  },
  symbol: {
    color: "#666666",
  },
  valueUSD: {
    color: "#009900",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: "6px",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
  },
  img: {
    width: "50px",
    height: "50px",
  },
  rightPannel: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  place: {
    marginRight: "16px",
    fontSize: 18,
  },
});
export default styles;
