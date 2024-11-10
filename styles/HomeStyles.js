import { StyleSheet } from 'react-native';

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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 4,
    width: '30%',
    padding: 10,
    margin: 10
  },
  text2: {
    marginLeft: 10,
    Flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeStyles;
