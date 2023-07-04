import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddd',
    color: 'white',
  },

  create_container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  create_para: {
    fontSize: 20,
    marginBottom: 10
  },

  create_input: {
    borderColor: '#000',
    borderWidth: 1,
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20
  },

  create_button: {
    backgroundColor: '#4267B2',
    borderRadius: 10

  },

  create_button_text: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10
  },

  login_container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },

  login_button: {
    backgroundColor: '#4267B2',
    borderRadius: 10
  },

  login_button_text: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10
  },

  create_new_button: {
    borderWidth: 1,
    borderColor: '#4267B2',
    borderRadius: 10,
    marginTop: 70
  },

  create_new_button_text: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10
  },

  home_container: {
    marginHorizontal: 15,  
    marginVertical: 15,  
  },

  welcome: {
    flexDirection: 'row'
  },

  welcome_text: {
    fontSize: 25,
    paddingTop: 10
  },

  create_post: {
    marginLeft: 100,
    fontSize: 20,
    backgroundColor: '#4267B2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  posts: {
    fontSize: 15,
    marginTop: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },

  logout: {
    alignItems: 'center',
    marginTop: 100,

  },

  logout_text: {
    color: 'red',
    fontSize: 20
  }

})