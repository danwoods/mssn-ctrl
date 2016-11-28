import Firebase from '../util/firebase'
import firebaseui from 'firebaseui'

export const initUI = (
    containerId,
    signInOptionArr = [ Firebase.auth.EmailAuthProvider.PROVIDER_ID ],
    successUrl = '',
    tosUrl = ''
) => {
  var uiConfig = {
    'signInSuccessUrl': successUrl,
    'signInOptions': signInOptionArr,
    'tosUrl': tosUrl,
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(Firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start(containerId, uiConfig);
  console.log('ln20')
}

export const getCurrentUser = () => {
  /**/
	return new Promise(function(resolve, reject) {
		Firebase.auth().onAuthStateChanged((user) => resolve(user), (err) => reject(err)); 
	});
  /**/
/*
	Firebase.auth().onAuthStateChanged(user => {
    suc(user)
		if(user){
      console.log(user)
			// User is signed in.
		} else {
		}
	},
	error => {
		console.log(error);
    err(error)
	});
	*/
}
