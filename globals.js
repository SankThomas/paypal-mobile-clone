import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: "#a020ff05",
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 32,
  },
  heading3: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  greenText: {
    color: "#10b581",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttons: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 4,
  },
  buttonText: {
    color: "#0071bb",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardsContainer: {
    marginTop: 32,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 32,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  bigImage: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 12,
  },
  sendButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  sendButtonText: {
    color: "#0071BB",
    fontSize: 18,
    fontWeight: "bold",
  },
  sendButtonDark: {
    backgroundColor: "#0071bb",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 32,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#99999975",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 32,
  },
})
