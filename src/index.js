import { render } from 'react-dom'
import { init } from './util/firebase'
import { initUI, getCurrentUser } from './auth/util'
import React from 'react'
import Firebase from './util/firebase'

console.log('hit')

const app = init()
console.log('app', app)

console.log('getting user')
getCurrentUser()
	.then((user) => {
		if(user){
			console.log('got user', user)
		}
		else{
      console.error('no user :( ')
      initUI('#firebaseui-auth-container', [ Firebase.auth.EmailAuthProvider.PROVIDER_ID ], '/index.html')
		}
	})
	.catch(err => {
		console.error('err', err)
		initUI('#firebaseui-auth-container', [ Firebase.auth.EmailAuthProvider.PROVIDER_ID ], '/index.html')
	})

console.log(document.querySelector('#main'))
console.log(Firebase.auth().currentUser)

render(
	<h1>
  	{ 'Hit' }
	</h1>,
	document.querySelector('#main')
)
