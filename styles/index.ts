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
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    fontSize: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#4E69A2',
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF'
  },
  buttonTextDisabled: {
    color: '#DDDDDD'
  },
  buttonDisabled: {
    backgroundColor: '#9CABCA'
  },
  logo: {
    width: 120,
    height: 150,
    marginBottom: 5,
  }
});
