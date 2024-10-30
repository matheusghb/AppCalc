import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    fontSize: 30,
    marginVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 36,
  },
  Input: {
    width: 10,
    height: 5,
  }
});

export default HomeStyles;