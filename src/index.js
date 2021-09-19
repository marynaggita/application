import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebaseConfig from './config/fbConfig';

const store = createStore(rootReducer, 
  compose(
   applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
   reduxFirestore(firebaseConfig),
   reactReduxFirebase(firebaseConfig)
  )
  
  );


ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
 ,
  document.getElementById('root')
);
