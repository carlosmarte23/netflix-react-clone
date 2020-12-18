import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: 'AIzaSyAdQf19lu5I8h0lLupeCAmL6GQARwq-tr4',
  authDomain: 'netflix-react-clone-aea22.firebaseapp.com',
  projectId: 'netflix-react-clone-aea22',
  storageBucket: 'netflix-react-clone-aea22.appspot.com',
  messagingSenderId: '414793598771',
  appId: '1:414793598771:web:946633717ee109190a6046',
};

// const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
