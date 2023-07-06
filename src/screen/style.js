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

  button_container: {
    position: 'absolute',
    marginLeft: 230,
  },

  create_post: {
    
    fontSize: 20,
    backgroundColor: '#4267B2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  post_container: {
    position: 'relative',
    top: 20,
    marginBottom: 170
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
    position: 'absolute',
    alignItems: 'center',
    marginTop: 680,
    marginLeft: 125,
  },

  logout_text: {
    color: 'red',
    fontSize: 20
  },

  edit_button: {
    backgroundColor: '#4267B2',
    borderRadius: 10,
    marginBottom: 20
  },

  delete_button: {
    backgroundColor: '#000',
    borderRadius: 10
  },

  delete_button_text: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    color: '#fff'
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalView: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 9,
  },

  modal_button_deleteStyle: {
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 50
  },

  modal_button_cancelStyle: {
    color: 'blue',
    textAlign: 'center',
    paddingHorizontal: 50
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  modal_button_container: {
    flexDirection: 'row',
  }

})