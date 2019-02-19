import { combineReducers } from 'redux';
//syncs firestore with state in the background
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import auth from './authReducer';
import project from './projectReducer';

const rootReducer = combineReducers({
  auth,
  project,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
