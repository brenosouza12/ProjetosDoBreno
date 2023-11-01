import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },

  secondaryButton: {
    backgroundColor: 'gray',
  },

  busItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  busItemText: {
    fontSize: 18,
  },
});

export default commonStyles;
