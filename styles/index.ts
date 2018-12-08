import {
  StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  label: {
    color: 'white',
  },
  input: {
    height: 40,
    width: 300,
    marginTop: 2,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    fontSize: 16,
  }
});
