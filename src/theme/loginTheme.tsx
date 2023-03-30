import { StyleSheet } from 'react-native'

export const loginStyles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  label: {
    marginTop: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  inputField: {
    color: '#FFF',
    fontSize: 20
  },
  inputFieldIos: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
    paddingBottom: 4
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  button: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  btnText: {
    fontSize: 18,
    color: '#FFF'
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginBottom: 50
  }
})
